drop database if exists postavis;
create database postavis;
use postavis;

## création de la table category
CREATE TABLE category (
  id_category SMALLINT(1) UNSIGNED NOT NULL,
  type_formation VARCHAR(25) NOT NULL,
  PRIMARY KEY (id_category)
  ) ENGINE InnoDB;

## création de la table post
CREATE TABLE posts (
  id_post INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(45) NULL,
  lastname VARCHAR(45) NOT NULL,
  avis LONGTEXT NOT NULL,
  note SMALLINT(1) UNSIGNED NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  category_id_category SMALLINT(1) UNSIGNED NOT NULL,
  PRIMARY KEY (id_post, category_id_category),
  CONSTRAINT fk_posts_category
    FOREIGN KEY (category_id_category)
    REFERENCES category (id_category)
    ON DELETE CASCADE
    ON UPDATE CASCADE) ENGINE InnoDB;
    
## insertion des catégories de formation dans la table category
INSERT INTO category (id_category, type_formation) VALUES (1, 'FrontEnd');
INSERT INTO category (id_category, type_formation) VALUES (2, 'BackEnd');
INSERT INTO category (id_category, type_formation) VALUES (3, 'Marketing');
INSERT INTO category (id_category, type_formation) VALUES (4, 'UX / UI');

## insertion des avis pour pouvoir effectuer les tester sur le rendement de la partie front end
INSERT INTO posts(firstname, lastname, avis, note, category_id_category) VALUES
('A', 'Anonymous', "Propos très bien amené et vraiment pédagogique, présentation léchée, rythme agréable… Je recommande vivement ! Pour un expérience utilisateur 5 étoiles, revoir le code typographique et faire attention à l'orthographe ;-)", 4, 3),
('B', 'Anonymous', "Excellente formation, très claire et complète", 4, 3),
('C', 'Anonymous', "J'ai bien aimé le fait que la formation se fasse à distance, l'apprentissage par projet permet l'assimilation de beaucoup de notions plus rapidement et efficacement.", 3, 3),
('D', 'Anonymous', "Il faut être vraiment très autonome pour suivre ce genre de formation. Comme c'est mon cas, forcément j'ai adoré suivre les 2 parcours. Mon mentor était au top et la coach en insertion pro m'a beaucoup aidée pour ma création d'entreprise. Je recommande à ceux qui sont à autonomes dans la formation.", 3, 3),

('E', 'Anonymous', "Une formation professionnalisante avec des projets et un encadrement qui permet de se projeter dans le monde de l’entreprise. J’ai apprécié faire cette formation.", 4, 1),
('F', 'Anonymous', "Globalement ce fut une bonne formation. Mon mentor m'a très bien suivie, en m'indiquant des pistes et non pas les solutions directement. On touche à pas mal d'aspect du métier et on s'habitue rapidement à devoir faire des recherches constamment, comme le veux le métier. Le seul hic c'est la progression des projets qui passe à un moment donné de plutôt facile à dur et intensif.", 2, 1),
('G', 'Anonymous', "J'ai terminé la formation de développeur web (qui a été changé par intégrateur web je crois depuis). Certains cours datent un peu, c'est pas très dérangeant car ça reste intéressant de voir du code plus vieux qu'on sera amené à voir de toute manière plus tard si on doit travailler sur des sites existants. Le mentor qui m'a été assigné était top, j'ai pas d'avis sur les autres par contre. Le plus gros de l'apprentissage vient tout de même de ses propres recherches, en autodidacte. Faut être prêt à chercher soit même d'autres cours en compléments.", 2, 1),
('H', 'Anonymous', "Excellente expérience à tous les niveaux, enseignement, accompagnement, caractère professionnel et professionnalisant, aucun point négatif. Je recommanderai cette formation, comme l'ensemble de celles s'adressant à des futur développeurs...", 5, 1),

('E', 'Anonymous', "Super infrastructure de communication au sein de la plateforme. Facilité d'accès aux ressources et aux questions/réponses.", 4, 4),
('F', 'Anonymous', "Je me suis totalement épanouie sur mon parcours! Ce que je trouve génial avec la pédagogie par projet c'est qu'on travaille vraiment sur des compétences métiers. On est donc prêt à travailler. Mais je pense que ce n'est pas approprié à tout le monde... En effet ça demande beaucoup de travail personnel, de recherches supplémentaires, d'implication et de curiosité", 3, 4),
('G', 'Anonymous', "Même si tout se fait en ligne, on a la sensation d'être une communauté. Il y a un workplace, un espace discord, des cafés virtuels organisés...", 5, 4),
('H', 'Anonymous', "Super expérience. On gère notre temps comme on le souhaite, il y a des cours où on passe moins temps car facile et d’autres cours où l’on peu s’attarder. Pareil pour les projets. Mentor et conseiller pédagogique sont là pour aider et guider.", 5, 4),

('Sedera', 'RANDRIANARIVOLA', "J'ai été intéressé par le côté pratique très intéressant. Objectifs atteints.", 5, 2),
('I', 'Anonymous', "Les explications du formateur étaient très claires et bien illustrées. Je recommanderai fortement cette formation, d'ailleurs cette semaine, je n'ai pas arreté d'en dire du bien auprès de mon entourage et je vais aussi le faire dans mon entreprise.", 4, 2),
('K', 'Anonymous', "Le formateur a été attentif à mes attentes. Bonne formation. Le formateur a de l'expérience dans le domaine. Les thèmes sont bien choisis.", 5, 2),
('L', 'Anonymous', "Je suis particulièrement satisfait de la formation surtout par la disponibilité du formateur et par le contenu du programme. Je suis prête à faire une grande publicité partout.", 3, 2);




