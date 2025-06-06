-- creating users table

CREATE TABLE freelancers (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

CREATE TABLE freelancer_info (
  id SERIAL PRIMARY KEY,
  freelancer_id INTEGER NOT NULL UNIQUE,
  security_question VARCHAR NOT NULL,
  security_answer_hash TEXT NOT NULL,
  FOREIGN KEY (freelancer_id) REFERENCES freelancers(id)
);
