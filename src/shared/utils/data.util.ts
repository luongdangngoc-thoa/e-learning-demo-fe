import _ from 'lodash'

/**
 * Convert data from API response to camel case format
 * @param obj
 * @returns
 */
export const convertToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(convertToCamelCase)
  }

  if (obj && typeof obj === 'object' && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        const camelKey = _.camelCase(key)
        acc[camelKey] = convertToCamelCase(obj[key])
        return acc
      },
      {} as Record<string, any>
    )
  }

  return obj
}
