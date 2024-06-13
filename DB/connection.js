import { Sequelize } from "sequelize";

export const sequelizeInstant = new Sequelize(
  "bwmdkufnwfeqzb8vccrm",
  "usdt8nkqiwzgqeld",
  "qYAkMQebXX8rICFrH4x5",
  {
    host: "bwmdkufnwfeqzb8vccrm-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);

// test connection
const testConnection = async () => {
  try {
    await sequelizeInstant.authenticate();
    console.log("Connection has been stablished sucessfully .");
  } catch (error) {
    console.error("connection error ,", error);
  }
};
// real connection
export const db_connection = async () => {
  try {
    await sequelizeInstant.sync({ alert: true, force: false });
    console.log("connection to the database is successed!");
  } catch (error) {
    console.log("We have issues to connect the database", error);
  }
};
