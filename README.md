# prisma-fun-catto
prisma-fun-catto is a simple node prisma app 

### Noes:

node -v 
23.2.0

Steps to setup Prima from scratch:

1. Install prisma & the cli:

* Be sure to install the prisma cli by: 
* npm install -g prisma
* check version: 
* prisma --version
* also install our prisma client: npm install @prisma/client 

* this is the old way to install the cli: npm install -g @prisma/cli 

2. create a schema.prisma file prisma\schema.prisma


3.  & the .env varaible which will be:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/test?schema=public"
or a connection string to a web based hosting db;

4. add a data source in our schema file:

datasource db {
  provider = "postgresql"   // or mysql, sqlite, etc.
  url      = env("DATABASE_URL") // or a hardcoded URL
}

5. Then execute `prisma generate` which generates our prisma client 
* Prisma Client is an auto-generated database client that's tailored to your database schema. By default, Prisma Client is generated into the node_modules/.prisma/client folder

6. create a `migrations` directory in our `prisma` directory;

7. Create migrate script
* command: prisma migrate dev --name name_of_migration --create-only
* then the file will be created such as: Prisma Migrate created the following migration without applying it 20250106180018_prisma_fun_init_migration_file

8. Run the Migration
* command: prisma migrate dev
* then Your database is now in sync with your schema.

---------------------
* at this point we are at a simple implementation of prisma connected to db; next we can import our PrismaClient and utlize prisma in our node app;



