import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) {
        return console.log('Missing MONGODB_URL');
    }

    if (isConnected) {
        return console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'Stack_app'
        });
        isConnected = true;
        console.log('DB connected')
    } catch (error) {
        console.log('Error connecting DB :: ', error)
    }
}