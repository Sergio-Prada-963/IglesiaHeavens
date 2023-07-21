CREATE DATABASE iglesiaHeavens;

USE iglesiaHeavens;

-- Tabla para Departamento
CREATE TABLE Departamento (
  idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
  nombreDepartamento VARCHAR(255) NOT NULL
);

-- Tabla  para Municipio
CREATE TABLE Municipio (
  idMunicipio INT PRIMARY KEY AUTO_INCREMENT,
  NombreMunicipio VARCHAR(255) NOT NULL,
  idDepartamento INT,
  FOREIGN KEY (idDepartamento) REFERENCES Departamento (idDepartamento)
);

-- Tabla para Comuna
CREATE TABLE Comuna (
  idComuna INT PRIMARY KEY AUTO_INCREMENT,
  nombreComuna VARCHAR(255) NOT NULL,
  idMunicipio INT,
  FOREIGN KEY (idMunicipio) REFERENCES Municipio (idMunicipio)
);

-- Tabla para Barrio
CREATE TABLE Barrio (
  idBarrio INT PRIMARY KEY AUTO_INCREMENT,
  nombreBarrio VARCHAR(255) NOT NULL,
  idComuna INT,
  FOREIGN KEY (idComuna) REFERENCES Comuna (idComuna)
);

-- Tabla para Creyente
CREATE TABLE Creyente (
  ididentificacion INT PRIMARY KEY AUTO_INCREMENT,
  nombres VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  NroCelular VARCHAR(15),
  direccion VARCHAR(255),
  IdBarrio INT,
  FOREIGN KEY (IdBarrio) REFERENCES Barrio (idBarrio)
);

