-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Personas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Personas` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Personas` (
  `PK_cedula` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido1` VARCHAR(30) NOT NULL,
  `apellido2` VARCHAR(30) NULL,
  `fecNacimiento` DATE NOT NULL,
  `sexo` INT NULL,
  `observaciones` VARCHAR(400) NULL,
  `ultUsuario` VARCHAR(20) NULL,
  `ultModificacion` DATE NULL,
  PRIMARY KEY (`PK_cedula`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Direcciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Direcciones` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Direcciones` (
  `PK_idDireccion` INT NOT NULL AUTO_INCREMENT,
  `FK_cedula` INT NOT NULL,
  `nomLugar` VARCHAR(40) NOT NULL,
  `direccion` VARCHAR(400) NOT NULL,
  `ultUsuario` VARCHAR(20) NULL,
  `ultModificacion` DATE NULL,
  PRIMARY KEY (`PK_idDireccion`),
  INDEX `FK_DireccionesPersona_idx` (`FK_cedula` ASC),
  CONSTRAINT `FK_DireccionesPersona`
    FOREIGN KEY (`FK_cedula`)
    REFERENCES `mydb`.`Personas` (`PK_cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Telefonos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Telefonos` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Telefonos` (
  `PK_telefono` INT NOT NULL,
  `PK_FK_cedula` INT NOT NULL,
  `descripcion` VARCHAR(50) NULL,
  `ultUsuario` VARCHAR(20) NULL,
  `ultModificacion` DATE NULL,
  PRIMARY KEY (`PK_telefono`),
  INDEX `FK_DireccionesPersonas_idx` (`PK_FK_cedula` ASC),
  CONSTRAINT `FK_DireccionesPersonas`
    FOREIGN KEY (`PK_FK_cedula`)
    REFERENCES `mydb`.`Personas` (`PK_cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
