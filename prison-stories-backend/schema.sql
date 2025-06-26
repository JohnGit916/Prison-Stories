CREATE TABLE IF NOT EXISTS stories (
  id SERIAL PRIMARY KEY,
  name TEXT,
  status TEXT,
  title TEXT,
  content TEXT,
  anonymous BOOLEAN,
  timestamp TIMESTAMP,
  likes INTEGER DEFAULT 0
);
