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
Pode utilizar o timestamps para criar o create_at e update_at na migration
`table.timestamps(true)`

No Model pode utilizar um alias para passar opções para mudar o nome. Nesse exemplo no banco de dados a coluna se chama 'content' mas podemos utilizar no Model para chamar nos Controllers como 'body'.

`@column({ columnName: 'content' })`
`public body: string`

Para criar o controller com os métodos padrões de API pode passar o '-r':
`node ace make:controller Posts -r`
Ele cria vários métodos, mas por conversão padrão os métodos utilizados para API são:
- index(GET) : para retornar um conjunto de dados
- store(POST) : para criar um dado novo no model
- show(GET) : exibindo apenas um dado que é filtrado
- update(PUT, PATCH) : atualizando um dado
- destroy(DELETE) : Excluir um dado da tabela

## Rotas
Para fornecer as rotas de conversão padrão de API, podemos utilizar:
`Route.resource('/posts', 'PostsController').apiOnly()`
Dessa forma ele já cria as rotas index, store, show, update e destroy com seus respectivos métodos.
