drop database if exists postavis;
create database postavis;
use postavis;
## création de la table category
CREATE TABLE IF NOT EXISTS `postavis`.`category` (
  `id_category` SMALLINT(1) UNSIGNED NOT NULL,
  `type_formation` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id_category`),
  UNIQUE INDEX `id_category_UNIQUE` (`id_category` ASC) VISIBLE)
ENGINE = InnoDB;
## création de la table post
CREATE TABLE IF NOT EXISTS `postavis`.`posts` (
  `id_post` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `avis` LONGTEXT NOT NULL,
  `note` SMALLINT(1) UNSIGNED NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `category_id_category` SMALLINT(1) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_post`, `category_id_category`),
  INDEX `fk_posts_category_idx` (`category_id_category` ASC) VISIBLE,
  CONSTRAINT `fk_posts_category`
    FOREIGN KEY (`category_id_category`)
    REFERENCES `postavis`.`category` (`id_category`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;
## insertion des catégories de formation dans la table category
INSERT INTO `postavis`.`category` (`id_category`, `type_formation`) VALUES ('1', 'FrontEnd');
INSERT INTO `postavis`.`category` (`id_category`, `type_formation`) VALUES ('2', 'BackEnd');
INSERT INTO `postavis`.`category` (`id_category`, `type_formation`) VALUES ('3', 'Marketing');
INSERT INTO `postavis`.`category` (`id_category`, `type_formation`) VALUES ('4', 'UX / UI');



