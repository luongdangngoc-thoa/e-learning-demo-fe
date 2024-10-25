export interface SupabaseQueryResponse {
  data: Partial<any[]> | any
  totalItems?: number
  error?: any
}
