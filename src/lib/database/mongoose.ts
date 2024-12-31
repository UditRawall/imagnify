import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}


declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: MongooseConnection | undefined;
}

const cached: MongooseConnection = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
    global.mongooseCache = cached;
}

export const connectToDatabase = async (): Promise<Mongoose> => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URL) throw new Error('missing MONGODB_URL');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
        dbName: 'ArtifyAi',
        bufferCommands: false,
    });

    cached.conn = await cached.promise;

    return cached.conn;
};
