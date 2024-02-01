import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://idsiaicrrggghjqchggf.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkc2lhaWNycmdnZ2hqcWNoZ2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NDkzMDgsImV4cCI6MjAyMjMyNTMwOH0.7R-Ep8Hbb_Vs5e5GXyx_3sqvCV7tNU4F5uoo05vn65o";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
