# prisma-fun-catto
* prisma-fun-catto is a simple node prisma app 

# Prisma Setup Guide

A comprehensive guide for setting up Prisma with Node.js from scratch.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Overview](#project-overview)
- [Installation Steps](#installation-steps)
- [Database Configuration](#database-configuration)
- [Schema Setup](#schema-setup)
- [Migration Process](#migration-process)
- [Next Steps](#next-steps)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js (v23.2.0 or higher)
- npm (Node Package Manager)
- A PostgreSQL database instance

## Project Overview

This guide walks through setting up a Node.js application with Prisma ORM, including database connection, schema configuration, and migrations.

## Installation Steps

### 1. Install Prisma CLI

```bash
# Install Prisma CLI globally
npm install -g prisma

# Verify installation
prisma --version
```

### 2. Install Prisma Client

```bash
npm install @prisma/client
```

Note: The legacy command `npm install -g @prisma/cli` is deprecated.

## Database Configuration

### 1. Create Environment File

Create a `.env` file in your project root:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/test?schema=public"
```

You can also use a connection string for cloud-hosted databases.

### 2. Create Project Structure

```bash
mkdir -p prisma/migrations
touch prisma/schema.prisma
```

## Schema Setup

Create your `schema.prisma` file with the following configuration:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"   // or mysql, sqlite, etc.
  url      = env("DATABASE_URL")
}

// Add your models here
```

## Migration Process

### 1. Generate Prisma Client

```bash
prisma generate
```

This creates a custom database client in `node_modules/.prisma/client`.

### 2. Create Migration

```bash
prisma migrate dev --name init_migration --create-only
```

This creates a migration file like: `YYYYMMDDHHMMSS_init_migration.sql`

### 3. Apply Migration

```bash
prisma migrate dev
```

After successful migration, your database will be in sync with your schema.

## Next Steps

1. Import Prisma Client in your application:
```javascript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

2. Start using Prisma in your application:
```javascript
// Example: Query your database
async function main() {
  // Your database operations here
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

## Troubleshooting

- If Prisma CLI isn't recognized, ensure it's properly installed globally
- Check your database connection string if you encounter connection issues
- Verify that your PostgreSQL server is running
- Ensure all required ports are open and accessible

---

For more detailed information, visit the [official Prisma documentation](https://www.prisma.io/docs/).
