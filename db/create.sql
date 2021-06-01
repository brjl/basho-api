DROP TABLE IF EXISTS haiku;

CREATE TABLE haiku (
  id SERIAL PRIMARY KEY NOT NULL,
  author VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
  
);

INSERT INTO haiku (author, content) 
VALUES ('松尾 芭蕉 (Matsuo Bashō)', E'First Line\nSecond Line\nThird Line'),
('松尾 芭蕉 (Matsuo Bashō)', E'Scarecrow in the hillock\nPaddy field --\nHow unaware!  How useful!'),
('松尾 芭蕉 (Matsuo Bashō)', E'Passing through the world\nIndeed this is just\nSogi''s rain shelter.'),
('松尾 芭蕉 (Matsuo Bashō)', E'Passing through the world\nIndeed this is just\nSogi''s rain shelter.');