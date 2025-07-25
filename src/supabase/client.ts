
import { createClient } from '@supabase/supabase-js/dist/module'
import { DataType } from './database.types'

export const supabase = createClient<DataType>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)
