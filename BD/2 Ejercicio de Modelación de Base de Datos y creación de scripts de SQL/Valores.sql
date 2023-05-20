-- Insertar datos en la tabla Pais
INSERT INTO olimpiadas.Pais(nombre, NumParticipantes, NumMedallas)
VALUES ('México', 1, 8),
       ('Honduras', 1, 3),
       ('Costa Rica', 1, 9),
       ('Belice', 1, 5),
       ('Guatemala', 1, 2),
       ('Ecuador', 1, 7),
       ('Venezuela', 1, 10),
       ('Perú', 1, 1),
       ('Colombia', 1, 6),
       ('Brasil', 2, 4),
       ('Paraguay', 2, 8),
       ('Uruguay', 1, 2),
       ('Chile', 1, 7),
       ('Argentina', 1, 3),
       ('Bolivia', 1, 9);

-- Insertar datos en la tabla Deportistas
INSERT INTO olimpiadas.Deportistas(Nombre, Apellido, Sexo, IdPais)
VALUES ('Juan', 'Pérez', 'Masculino', 7),
	('María', 'González', 'Femenino', 4),
	('Octavio', 'Navarro', 'Masculino', 9),
	('Ana', 'Rodríguez', 'Femenino', 2),
	('Esteban', 'Castillo', 'Masculino', 8),
	('Laura', 'Sánchez', 'Femenino', 1),
	('Luis', 'Torres', 'Masculino', 5),
	('Patricia', 'Ramírez', 'Femenino', 3),
	('Gilberto', 'Echeverría', 'Masculino', 6),
	('Gabriela', 'Castro', 'Femenino', 10),
	('Diego', 'Mendoza', 'Masculino', 12),
	('Carolina', 'Vargas', 'Femenino', 15),
	('Pedro', 'Silva', 'Masculino', 11),
	('Valeria', 'Ríos', 'Femenino', 13),
	('Ricardo', 'Cordero', 'Masculino', 14);

-- Insertar datos en la tabla Disciplina
INSERT INTO olimpiadas.Disciplina(TituloDisciplina, TipoDisciplina, Puntuaje)
VALUES ('400m nado libre', 'Natación', 150),
('Boxeo', 'De contacto', 100),
('Ciclismo en pista', 'Ciclismo', 120),
('Esgrima', 'De combate', 180),
('Lucha libre', 'De precisión', 130),
('Remo', 'Acuático', 130),
('Taekwondo', 'De contacto', 70),
('Tenis de mesa', 'De oposición', 160),
('Vela', 'Acuático', 90);

-- Insertar datos en la tabla Prueba
INSERT INTO olimpiadas.Prueba(IdDisciplina, Flecha, Lugar, Inscritos, FrasesPrueba)
VALUES (1, '2040-05-10', 'Berlin', 4, 'Eliminatoria'),
       (2, '2040-05-11', 'Berlin', 2, 'Final'),
       (3, '2040-05-12', 'Berlin', 2, 'Final'),
       (4, '2040-05-13', 'Berlin', 2, 'Final'),
       (5, '2040-05-14', 'Berlin', 4, 'Eliminatoria'),
       (6, '2040-05-15', 'Berlin', 6, 'Eliminatoria'),
       (7, '2040-05-16', 'Berlin', 8, 'Eliminatoria'),
       (8, '2040-05-17', 'Berlin', 10, 'Eliminatoria'),
       (9, '2040-05-18', 'Berlin', 8, 'Eliminatoria'),
       (10, '2040-05-19', 'Berlin', 6, 'Eliminatoria');

-- Insertar datos en la tabla Clasificacion
INSERT INTO olimpiadas.Clasificacion(Matricula, IdPrueba, Rango, PuntuajeTotal)
VALUES (12, 9, 2, 60),
	(9, 10, 6, 50),
	(11, 8, 5, 30),
	(5, 1, 8, 70),
	(10, 9, 3, 10),
	(2, 8, 7, 40),
	(1, 4, 2, 60),
	(13, 5, 7, 40),
	(15, 7, 10, 30),
	(7, 2, 6, 50),
	(14, 3, 1, 80),
	(6, 4, 10, 90),
	(3, 5, 4, 60),
	(8, 3, 6, 70),
	(4, 9, 2, 10),
	(8, 1, 4, 90),
	(10, 2, 5, 10),
	(6, 9, 2, 20),
	(11, 6, 3, 40),
	(3, 1, 1, 80);