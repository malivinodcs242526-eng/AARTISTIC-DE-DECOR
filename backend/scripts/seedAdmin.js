require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected for seeding...');

    // Clear existing admins
    await Admin.deleteMany({});
    console.log('Existing admins cleared');

    const admin = await Admin.create({
      email: 'admin@aartisticdecor.com',
      password: 'AdminPassword123!' // User should change this after logging in
    });

    console.log(`Admin created with email: ${admin.email}`);
    process.exit();
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
