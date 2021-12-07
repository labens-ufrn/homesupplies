import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "homesupplies_user",
  password: process.env.POSTGRES_PASSWORD || "homesupplies",
  database: process.env.POSTGRES_DB || "homesupplies_db",
  entities: [],
  synchronize: true,
};

export default config;
