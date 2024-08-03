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

export function genDate(): string {

  const date = new Date
  // Extract components
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-based
  const year = String(date.getFullYear()).slice(-2) // Get last two digits of the year
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${day}/${month}/${year}_${hours}:${minutes}:${seconds}`
}