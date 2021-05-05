DROP TABLE IF EXISTS haiku;

CREATE TABLE haiku (
  id SERIAL PRIMARY KEY NOT NULL,
  author VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
  
);

INSERT INTO haiku (author, content) VALUES ('松尾 芭蕉 (Matsuo Bashō)', E'First Line\nSecond Line\nThird Line');