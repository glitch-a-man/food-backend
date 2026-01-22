const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('--- DATABASE CONNECTION ERROR ---');
        console.error(`Error: ${error.message}`);
        if (error.message.includes('Could not connect to any servers')) {
            console.error('Tip: Make sure IP 0.0.0.0/0 is whitelisted in MongoDB Atlas Network Access');
        }
        console.error('---------------------------------');
        process.exit(1);
    }
};

module.exports = connectDB;
