import { useState, useEffect } from "react";

/**
 * Custom hook that returns a debounced value, which delays updating the value
 * by the specified delay time. Useful for reducing the frequency of actions like API calls.
 *
 * @template T - The type of the value being debounced.
 * @param {T} value - The value to be debounced. Can be any type.
 * @param {number} delay - The debounce delay in milliseconds. Determines how long to wait before updating the value.
 * @returns {T} - The debounced value.
 *
 * @example
 * const debouncedValue = useDebounceTimer(searchTerm, 500);
 * // `debouncedValue` will update only after 500ms have passed since `searchTerm` was last changed.
 */
export function useDebounceTimer<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
