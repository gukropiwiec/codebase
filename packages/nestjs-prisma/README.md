# NestJS - Prisma

### Base project using **NestJS** (Server) with **Prisma** (ORM)

<br/>

## Table of content

- [Initial Configuration](#initialconfig)
- [Database Configuration](#dbconfig)
- [Migrations](#migrations)

---

<div id="initialconfig"></div>

## Initial Configuration

> This section shows how the base project was created

1.  Install NestJS CLI

        $ npm install -g @nestjs/cli

2.  Create new skeleton app

        $ nest new nestjs-prisma

3.  Inside the projects folder, install prisma as a dev dependency

        $ npm install prisma --save-dev

4.  Create initial prisma setup

        $ npx prisma init

<div id="dbconfig"></div>

## Database Configuration

5.  Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB and CockroachDB.

    In this case we will use MySQL.

    Change the connection in `prisma/schema.prisma` file

        datasource db {
          provider = "mysql"
          url = env("DATABASE_URL")
        }

6.  Adjust `.env` file with the database credencials

        DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

<div id="migrations"></div>

## Migrations

7.  Create models in the `prisma/schema.prisma` file

    Example:

        model User {
          id    Int     @default(autoincrement()) @id
          email String  @unique
          name  String?
          posts Post[]
        }

8.  Generate SQL migration files

        $ npx prisma migrate dev --name init

9.  Install and generate Prisma Client

        $ npm install @prisma/client
