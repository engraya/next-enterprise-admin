import mongoose, { Connection } from "mongoose";

interface ConnectionStatus {
  isConnected?: number;
}

const connection: ConnectionStatus = {};

export const connectToDB = async (): Promise<void> => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};
