DROP TABLE IF EXISTS budgets CASCADE;

CREATE TABLE budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  start_date date NOT NULL,
  end_date date
);