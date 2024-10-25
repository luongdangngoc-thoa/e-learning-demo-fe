import { API_URL } from '@/shared/config/routes/api.route'
import { axiosInterceptor } from '@/shared/utils/http.util'

const blogApiRequest = {
  getAllBlog: async () => axiosInterceptor.get(API_URL.BLOG.GET_ALL_BLOG)
}

export default blogApiRequest
