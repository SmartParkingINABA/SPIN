import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.configDotenv({ path: "./src/environments/.env" });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        timezone: '+07:00',
        
        dialectOptions: {
            timezone: 'local'
        }
    }
);



export default sequelize;