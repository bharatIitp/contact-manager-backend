import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import connectDB from '../config/db.js';
import Contact from '../models/Contact.js';

dotenv.config();

if (process.env.NODE_ENV === 'production') {
  console.error('production mode!');
  process.exit(1);
}

const seedContacts = async () => {
  try {
    await connectDB();
    console.log(' MongoDB connected');

    // Clean old data
    await Contact.deleteMany();
    console.log('Old contacts deleted');

    // Generate fake contacts
    const fakeContacts = Array.from({ length: 25 }).map(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number('+91-##########'),
      label: faker.helpers.arrayElement(['Friend', 'Work', 'Family']),
    }));

    await Contact.insertMany(fakeContacts);
    console.log('25 fake contacts inserted');

    process.exit(0); // Success
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1); // Failure
  }
};

seedContacts();
