import mongoose from "mongoose";

const DB_Connection = async (DB_URL) => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`connection to database successful : ${conn.connection.host}`);
  } catch (error) {
    console.log("error while connecting to mongodb: " + error.message);
  }
};

export default DB_Connection;
