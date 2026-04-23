import { type ClassValue, clsx } from "clsx";

// Simple clsx implementation since we don't need the full package
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Re-export clsx for convenience
export { clsx };
