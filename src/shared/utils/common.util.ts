/**
 * Normalize path
 * Ex: /path => /path | path => /path
 *
 * @param path
 * @returns string
 */
export const normalizePath = (path: string) => {
  if (path === '/') return path
  return path.startsWith('/') ? path : `/${path}`
}

/**
 * Normalize routes
 * Ex: ['/path', 'path'] => ['/path', '/path'] | ['path', 'path'] => ['/path', '/path']
 *
 * @param routes
 * @returns
 */
export const normalizeRoutes = (routes: string[]) => routes.map(normalizePath)
