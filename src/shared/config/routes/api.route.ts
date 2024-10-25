const AUTH_PREFIX = '/auth'
const COURSE_PREFIX = '/courses'
const BLOG_PREFIX = '/blogs'
const CATEGORY_PREFIX = '/categories'
const USER_PREFIX = '/users'

export const API_URL = {
  AUTH: {
    LOGIN: `${AUTH_PREFIX}/login`,
    REGISTER: `${AUTH_PREFIX}/register`
  },

  COURSE: {
    GET_BY_ID: `${COURSE_PREFIX}/:id`
  },

  USER: {
    ME: `${USER_PREFIX}/me`
  },

  BLOG: {
    GET_ALL_BLOG: `${BLOG_PREFIX}`,
    GET_BY_ID: `${BLOG_PREFIX}/:id`
  },

  CATEGORY: {
    GET_ALL: `${CATEGORY_PREFIX}`
  }
}
