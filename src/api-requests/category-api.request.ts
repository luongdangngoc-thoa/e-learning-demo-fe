import { API_URL } from '@/shared/config/routes/api.route'
import { axiosInterceptor } from '@/shared/utils/http.util'

const categoryApiRequest = {
  getCategories: async () => axiosInterceptor.get(API_URL.CATEGORY.GET_ALL)
}

export default categoryApiRequest
