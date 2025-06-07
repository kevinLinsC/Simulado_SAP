CREATE DATABASE Livraria;

USE Livraria;

CREATE TABLE USUARIO(
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(75),
    email VARCHAR(100)
);

CREATE TABLE LIVROS(
	id_livro INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    titulo_livro VARCHAR(100),
    nome_autor VARCHAR(75),
    genero VARCHAR(50),
    status_livro ENUM("Lido", "Lendo", "Quero ler"),
    FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario)
);