import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertArrayString(input: string): string[] {
  // Regular expression to split the string at any occurrence of the URL
  const urlRegex = /\n/g
  const output = input.split(urlRegex)
  return output
}