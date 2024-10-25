import { API_URL } from '@/shared/config/routes/api.route'
import { type TLoginSchema, type TRegisterSchema } from '@/shared/schemas/schemas'
import { axiosInterceptor } from '@/shared/utils/http.util'

const authApiRequest = {
  login: async (payload: TLoginSchema) => axiosInterceptor.post(API_URL.AUTH.LOGIN, payload),
  register: async (payload: TRegisterSchema) => axiosInterceptor.post(API_URL.AUTH.REGISTER, payload)
}

export default authApiRequest
