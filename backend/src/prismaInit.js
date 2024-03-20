// prismaInit.js

const { PrismaClient } = require('@prisma/client');


const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);


const prisma = new PrismaClient();

async function initializeDatabase() {
  try {

    // Connect to the database
    await prisma.$connect();

    // Check if the database exists
    const databaseExists = await prisma.$executeRaw`SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'uovgymDB'`;

    if (!databaseExists.length) {
      // Create the database if it doesn't exist
      await prisma.$executeRaw`CREATE DATABASE uovgymDB`;
      console.log('Database uovgymDB created');
    }

    // Apply migrations
    await prisma.$migrate();

    // Check if the database exists by counting users
    const { stdout } = await execAsync('npx prisma user count');
    const userCount = parseInt(stdout);

    if (userCount === 0) {
      // Apply migrations if the database is empty
      await execAsync('npx prisma migrate dev');
      console.log('Database migrations applied');
    }

    // Connect to the database
    await prisma.$connect();


    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database:', error);

  } finally {
    // Disconnect from the database
    await prisma.$disconnect();


  }
}

module.exports = initializeDatabase;