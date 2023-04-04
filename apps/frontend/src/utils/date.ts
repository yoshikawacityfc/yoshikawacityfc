import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Tokyo");

export function formatDateTime(date: string): string {
  return dayjs(date).format("YYYY/MM/DD HH:mm:ss");
}

export function formatDate(date: string): string {
  return dayjs(date).format("YYYY/MM/DD");
}
