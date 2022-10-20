CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Correo TEXT
);
/*Pregunta: Tengo entendido que las comillas simples y las comillas dobles son para textos, 
cual es la diferencia de uso? o no imprta cual use?*/
INSERT INTO users (Nombre, Apellido, Correo)
    values ('Yaya Prakasha', 'Ruiz Lopez', 'yayaruiz141@gmail.com'),
            ('Yelsyn Adrid','Cruz Hernandez','yelsynhernandez@gmail.com');