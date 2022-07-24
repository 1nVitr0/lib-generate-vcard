export function tz() {
  const timeZoneOffset = new Date().getTimezoneOffset();
  const tzHours = Math.floor(timeZoneOffset / 60);
  const tzMinutes = timeZoneOffset % 60;
  const tzOperator = tzHours < 0 ? "+" : "-";

  return `${tzOperator}${Math.abs(tzHours).toFixed(0).padStart(2, "0")}${
    tzMinutes ? `:${tzMinutes.toFixed(0).padStart(2, "0")}` : ""
  }`;
}
