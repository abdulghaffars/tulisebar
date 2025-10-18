import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { id as idLocale } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {

  if (!date || isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  return `${format(new Date(date), "d MMM yyyy, HH:mm", {
    locale: idLocale,
  })} • ${formatDistanceToNow(new Date(date), { addSuffix: true, locale: idLocale })}`;
}
