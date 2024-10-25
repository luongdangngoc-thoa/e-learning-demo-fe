import { LRUCache } from 'lru-cache'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

type RateLimiter = {
  check: (limit: number, token: string) => boolean
}

/**
 * Creates a rate limiter using an LRU cache.
 *
 * @param {Options} [options] - Configuration options for the rate limiter.
 * @returns {RateLimiter} The rate limiter instance with a check method.
 */
export default function rateLimit(options?: Options): RateLimiter {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000
  })

  return {
    check: (limit: number, token: string) => {
      const tokenCount = (tokenCache.get(token) as number[]) || [0]
      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount)
      }
      tokenCount[0] += 1

      const currentUsage = tokenCount[0]
      const isRateLimited = currentUsage >= limit

      return isRateLimited
    }
  }
}
