import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedDate = (dateString: string) => {
  const date = new Date(dateString);
  // return in format MM/DD/YYYY with leading zeros
  return `${numberToStringWithLeadingZero(date.getMonth() + 1)}/${numberToStringWithLeadingZero(date.getDate())}/${date.getFullYear()}`;
};

const numberToStringWithLeadingZero = (num: number) => {
  return ("0" + num.toString()).slice(-2);
};

const _nth = (d: number) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
