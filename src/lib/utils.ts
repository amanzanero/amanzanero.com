import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${
    date.toLocaleString("default", { month: "long" }) +
    " " +
    date.getDate() +
    nth(date.getDate()) +
    ", " +
    date.getFullYear()
  }`;
};

const nth = (d: number) => {
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
