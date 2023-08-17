# Melhores práticas para Adonis
Documentação das melhores práticas utilizando o Adonis para projetos escaláveis.

## BD Mysql
Nesse projeto estarei utilizando o banco de dados Mysql utilizando Docker

Criação do container Mysql:
`docker run -p 3306:3306 --name bootcamp_adonis -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=adonis -d mysql --default-authentication-plugin=mysql_native_password`

ou arquivo:

// arquivo:  docker-compose.yml
version: '3.9'

services:
  database:
    image: mysql
    platform: linux/x86_64
    container_name: bootcamp_cataline
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 'secret'
      MYSQL_DATABASE: 'adonis'
    ports:
      - '3306:3306'
Comando para alterar método de autenticação do MySQL para torna-lo compatível com Drive MySQL do Node.

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'secret';

flush privileges;

## Lucid ORM e Migrations
