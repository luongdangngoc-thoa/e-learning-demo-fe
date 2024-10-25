import { createBrowserClient } from '@supabase/ssr'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''

class SupabaseService {
  private client: SupabaseClient

  private browserClient: SupabaseClient

  constructor() {
    this.client = createClient(supabaseUrl, supabaseServiceRoleKey)
    this.browserClient = createBrowserClient(supabaseUrl, supabaseServiceRoleKey)
  }

  public getClient() {
    return this.client
  }

  public getBrowserClient() {
    return this.browserClient
  }
}

const supabaseServiceInstance = new SupabaseService()

export default supabaseServiceInstance
