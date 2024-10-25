/**
 * Supabase indexes start from 0
 * Example: page = 1, limit = 10 => from = 0, to = 9
 * Example: page = 2, limit = 10 => from = 10, to = 19
 */
export const getPaginationRange = (page: number, limit: number) => {
  const from: number = (page - 1) * limit
  const to: number = from + limit - 1

  return { from, to }
}
