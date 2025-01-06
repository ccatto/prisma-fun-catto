import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// async function createUserTest(email: string, name?: string) {
async function createUserTest(email, name) {
    try {
      const newUserTest = await prisma.userTest.create({
        data: {
          email,
          name,
        },
      });
  
      console.log('UserTest created:', newUserTest);
      return newUserTest;
    } catch (error) {
      console.error('Error creating UserTest:', error);
      throw error; 
    } finally {
      await prisma.$disconnect(); 
    }
  }

  createUserTest ( "Catto@email.com2", "Catto");

  const userTests = await prisma.userTest.findMany();
  // const users = await prisma.usertest.findMany()

console.log("inside index.js");
console.log("userTests === ", userTests);