SET NAMES utf8mb4;
DROP SCHEMA IF EXISTS olimpiadas;
CREATE SCHEMA olimpiadas;
USE olimpiadas;

CREATE TABLE olimpiadas.Pais
(
    idpais SMALLINT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    NumParticipantes INT NOT NULL,
    NumMedallas INT NOT NULL,
    PRIMARY KEY (idpais)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE olimpiadas.Deportistas
(
    Matricula SMALLINT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(40) NOT NULL,
    Apellido VARCHAR(40) NOT NULL,
    Sexo VARCHAR(12) NOT NULL,
    IdPais SMALLINT NOT NULL,
    PRIMARY KEY (Matricula),
    CONSTRAINT FK_Deportistas_Pais FOREIGN KEY (IdPais) REFERENCES olimpiadas.Pais(idpais)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE olimpiadas.Disciplina
(
    IdDisciplina SMALLINT NOT NULL AUTO_INCREMENT,
    TituloDisciplina VARCHAR(40) NOT NULL,
    TipoDisciplina VARCHAR(40) NOT NULL,
    Puntuaje INT NOT NULL,
    PRIMARY KEY (IdDisciplina)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE olimpiadas.Prueba
(
    IdPrueba SMALLINT NOT NULL AUTO_INCREMENT,
    IdDisciplina SMALLINT NOT NULL,
    Flecha DATE NOT NULL,
    Lugar VARCHAR(40) NOT NULL,
    Inscritos INT NOT NULL,
    PRIMARY KEY (IdPrueba),
    FrasesPrueba VARCHAR(15),
    CONSTRAINT FK_Prueba_Disciplina FOREIGN KEY (IdDisciplina) REFERENCES olimpiadas.Disciplina(IdDisciplina)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE olimpiadas.Clasificacion
(
    IdClasificacion SMALLINT NOT NULL AUTO_INCREMENT,
    Matricula SMALLINT NOT NULL,
    IdPrueba SMALLINT NOT NULL,
    Rango INT NOT NULL,
    PuntuajeTotal INT NOT NULL,
    PRIMARY KEY (IdClasificacion),
    CONSTRAINT FK_Clasificacion_Deportistas FOREIGN KEY (Matricula) REFERENCES olimpiadas.Deportistas(Matricula),
    CONSTRAINT FK_Clasificacion_Prueba FOREIGN KEY (IdPrueba) REFERENCES olimpiadas.Prueba(IdPrueba)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;