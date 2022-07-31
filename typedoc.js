const { readFileSync, readdirSync, statSync, existsSync } = require('fs');
const { join } = require('path');

const pagesDir = 'src/docs/pages';

// Walk recursively through the docs directory reading index.md files for headings and other files as child pages
function getPages (dir, depth = 0) {
  const source = "index.md";
  const title = existsSync(`${dir}/${source}`)
    ? readFileSync(`${dir}/${source}`, 'utf8').match(/\[\/\/\]: # \(([^)]+)\)/)[1]
    : null;
  const childrenDir = depth > 0 ? dir.split('/').pop() : undefined;
  const children = [];

  if (depth === 0) console.log(`Collecting documentation pages from ${dir}:`);
  if (title) console.log(`${" ".repeat(depth * 2)}📄 ${childrenDir}/${source} - ${title}`);

  const files = readdirSync(dir);
  files.forEach((source) => {
    const filePath = join(dir, source);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      // Recurse into directories
      const subPages = getPages(filePath, depth + 1);
      if (subPages instanceof Array) {
        children.push(...subPages);
      } else {
        children.push(subPages);
      }
    } else if (stat.isFile() && source !== 'index.md') {
      const title = readFileSync(filePath, 'utf8').match(/\[\/\/\]: # \(([^)]+)\)/)[1]
      console.log(`${" ".repeat((depth + 1) * 2)}📄 ${source} - ${title}`);
      children.push({ source, title });
    }
  });

  if (!title) {
    return children;
  } else if (children.length === 0) {
    return { source: childrenDir ? `${childrenDir}/${source}` : source, title };
  } else {
    return { source: childrenDir ? `${childrenDir}/${source}` : source, title, children, childrenDir };
  }
}

const pages = getPages(pagesDir);

module.exports = {
  includeVersion: true,
  categorizeByGroup: false,
  entryPoints: ["src/index.ts", "src/experimental/index.ts"],
  categoryOrder: ["Generate", "Properties", "Parameters", "Data Types", "Other", "*", "Internally Used"],
  pluginPages: {
    source: pagesDir,
    pages: pages instanceof Array ? pages : [pages],
  }
}