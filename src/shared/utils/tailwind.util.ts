import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names using clsx and tailwind-merge.
 *
 * This function takes multiple class values as arguments and merges them using the
 * `clsx` utility, and then further processes the result with `twMerge` for better
 * handling of Tailwind CSS classes.
 *
 * @param {...ClassValue} inputs - The class names and/or conditional class objects to be combined.
 * @returns {string} The combined class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
