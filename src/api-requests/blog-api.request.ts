import { API_URL } from '@/shared/config/routes/api.route'
import { axiosInterceptor } from '@/shared/utils/http.util'

const blogApiRequest = {
  getAllBlog: async () => axiosInterceptor.get(API_URL.BLOG.GET_ALL_BLOG),
  getById: async (id: string) => axiosInterceptor.get(API_URL.BLOG.GET_BY_ID.replace(':id', id))
}

export default blogApiRequest
