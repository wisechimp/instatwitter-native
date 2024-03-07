import "react-native-url-polyfill/auto"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://xfbtcirtvdbopckxkect.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmYnRjaXJ0dmRib3Bja3hrZWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NDkxMjAsImV4cCI6MjAwNjIyNTEyMH0.yFyoddBbQPcqejsDsyX_098xxifbsDR1PtZIilFq544"

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
)
