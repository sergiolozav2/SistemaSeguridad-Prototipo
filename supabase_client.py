from supabase import create_client, Client

url: str = "https://idsiaicrrggghjqchggf.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkc2lhaWNycmdnZ2hqcWNoZ2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NDkzMDgsImV4cCI6MjAyMjMyNTMwOH0.7R-Ep8Hbb_Vs5e5GXyx_3sqvCV7tNU4F5uoo05vn65o"
database: Client = create_client(url, key)