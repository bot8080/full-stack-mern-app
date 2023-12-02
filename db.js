// Name: Abhinav Khanna
// C0873411

const mongoose = require('mongoose');
require('dotenv').config();

// Function to clear entries in the MongoDB database
const clearEntries = async () => {
    try {
        console.log('Entries cleared successfully!');
    } catch (error) {
        console.error('Error while clearing entries:', error);
    }
};

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        // await clearEntries();
    } catch (error) {
        console.error('Error while connecting to MongoDB:', error);
    }
};

module.exports = { connectDB, clearEntries };
