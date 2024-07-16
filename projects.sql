SELECT User, Host FROM mysql.user; 
CREATE USER 'bianca'@'localhost' IDENTIFIED BY 'SheCodes0';

GRANT ALL PRIVILEGES ON * . * TO 'bianca'@'localhost';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'bianca'@'localhost';

SHOW DATABASES; 

CREATE DATABASE portfolio; 
USE portfolio; 

CREATE TABLE projects(
	id INT AUTO_INCREMENT PRIMARY KEY, 
    image LONGBLOB NOT NULL, 
    title VARCHAR (100) NOT NULL, 
    project_description VARCHAR (500) NOT NULL, 
    technologies VARCHAR (50) NOT NULL, 
    github VARCHAR (255) NOT NULL, 
    website VARCHAR (255) NOT NULL, 
    alt VARCHAR (50)
);

INSERT INTO projects (image, title, project_description, technologies, github, website, alt) VALUES ('Rick and Morty Character Finder','React Front-End project created to search Rick and Morty characters. Name, species and status filters. Additionally, click on a character to get a detailed view of the character.', 'React JS | CSS', 'https://github.com/BiancaMesa/rick-and-morty-character-finder', 'https://biancamesa.github.io/rick-and-morty-character-finder/', 'First slide');

INSERT INTO projects VALUES (1, LOAD_FILE('../images/rick5.png', 'Rick and Morty Character Finder','React Front-End project created to search Rick and Morty characters. Name, species and status filters. Additionally, click on a character to get a detailed view of the character.', 'React JS | CSS', 'https://github.com/BiancaMesa/rick-and-morty-character-finder', 'https://biancamesa.github.io/rick-and-morty-character-finder/', 'First slide');

INSERT INTO projects (image, title, project_description, technologies, github, website, alt) VALUES
('rickAndMorty', 'Rick and Morty Character Finder', 'React Front-End project created to search Rick and Morty characters. Name, species and status filters. Additionally, click on a character to get a detailed view of the character.', 'React JS | CSS | Node JS | Vite', 'https://github.com/BiancaMesa/rick-and-morty-character-finder', 'https://biancamesa.github.io/rick-and-morty-character-finder/', 'First slide'),

('catCharity', 'Gatos de Ogíjares', 'Full-Stack Project created with React and MySQL. It\'s a cat charity aimed to raise awareness and funds for the cats in Ogíjares. (Project still in progress)', 'React JS | MySQL | CSS | Node JS | Vite', 'https://github.com/BiancaMesa/cat-charity', 'https://biancamesa.github.io/cat-charity/', 'Second slide'),

('guessTheNumber', 'Guess The Number', 'JavaScript project that allows the user to guess a number from 1 to 100. The user will get hints if their number is above or below the correct one.', 'JavaScript | CSS', 'https://github.com/BiancaMesa/guess-the-number', 'https://biancamesa.github.io/guess-the-number/', 'Third slide'),

('animeFinder', 'Anime Finder', 'Front-End web application developed with JavaScript to search for anime series with an option to save the user\'s favorites.', 'JavaScript | CSS', 'https://github.com/BiancaMesa/anime-finder', 'https://biancamesa.github.io/anime-finder/', 'Fourth slide'),

('pawsomeProfileCards', 'Pawsome Profile Cards', 'Front-End project developed to create customized business cards and share them.', 'JavaScript | CSS | Node JS | Vite', 'https://github.com/BiancaMesa/project-promo-w-module-2-team-3', 'https://victoriagz.github.io/project-promo-w-module-2-team-3/', 'Sixth slide'),

('findACountry', 'Find a Country', 'Front-End project where the user can search countries, filter by continent and add new ones to the list.', 'React | CSS | Node JS | Vite', 'https://github.com/BiancaMesa/find-a-country', 'https://biancamesa.github.io/find-a-country/', 'Seventh slide'),

('grogu', 'Watch Out for Grogu!', 'A game developed using React where the user will have to collect as many valuable goods as possible before Grogu advances along the path.', 'React | CSS | Node JS | Vite', 'https://github.com/BiancaMesa/grogu-game', 'https://biancamesa.github.io/grogu-game/', 'Eigth slide'),

('proyectosPaintones', 'Proyectos Paintones', 'Full-Stack project that allows the user to create business cards and share them. There is a section with all the projects that have been created up to date and where the new ones created will be added.', 'React | Express JS | MySQL | CSS | Node JS | Template Engine', 'https://github.com/BiancaMesa/promo-w-module-4-team-2', 'https://proyectos-paintones.onrender.com', 'Eighth slide');
