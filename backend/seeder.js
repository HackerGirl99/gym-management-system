import mongoose from 'mongoose';
import users from './data/users.js';
import equipments from './data/equipments.js';
import User from './models/userModel.js';
import Equipment from './models/equipmentModel.js'; // Changed import name to match the model name
import Reservation  from './models/Reservation.js';
import UserLogs from './models/userLogsModel.js';
import connectDB from './config/db.js';
import colors from 'colors';
import 'dotenv/config';

connectDB();

const importData = async () => {
  try {
    await UserLogs.deleteMany();
    await Reservation.deleteMany();
    await User.deleteMany();
    await Equipment.deleteMany(); // Changed to Equipment.deleteMany() to match the model name

    const createUsers = await User.insertMany(users);

    const adminUser = createUsers[0]._id;

    const sampleEquipments = equipments.map(equipment => { // Changed to sampleEquipments
      return { ...equipment, user: adminUser }; // Changed to equipment
    });

    await Equipment.insertMany(sampleEquipments); // Changed to Equipment.insertMany() to match the model name
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await UserLogs.deleteMany();
    await Reservation.deleteMany();
    await User.deleteMany();
    await Equipment.deleteMany(); // Changed to Equipment.deleteMany() to match the model name

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
