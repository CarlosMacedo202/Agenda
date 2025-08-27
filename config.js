// config.js
const SUPABASE_URL = "https://hhybmnemvrvwbwktsnmt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoeWJtbmVtdnJ2d2J3a3Rzbm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTc0OTgsImV4cCI6MjA3MTg3MzQ5OH0.hxIhwfY-1jSfFyYrG3EgcTeYLGnKkEyEGqSjf89YlPo";
const supabaseClient = supabase.createClient(SUPABASE_URL,
SUPABASE_KEY);
