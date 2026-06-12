import mongoose from 'mongoose';
export const databaseName = 'octofit_db';
export function getMongoUri() {
    return process.env.MONGODB_URI ?? `mongodb://127.0.0.1:27017/${databaseName}`;
}
export async function connectDatabase() {
    await mongoose.connect(getMongoUri());
    return mongoose.connection;
}
