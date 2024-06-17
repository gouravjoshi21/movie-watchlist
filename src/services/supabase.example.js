import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://usbpbnhdajcjxdyleyri.supabase.co'
const supabaseKey = 'key'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
