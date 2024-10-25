import { API_URL } from '@/shared/config/routes/api.route'
import { axiosInterceptor } from '@/shared/utils/http.util'

const courseApiRequest = {
  getCourseById: async (id: string) => axiosInterceptor.get(API_URL.COURSE.GET_BY_ID.replace(':id', id))
}

export default courseApiRequest
