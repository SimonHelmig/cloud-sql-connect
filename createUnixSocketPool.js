const Knex = require("knex");

const createUnixSocketPool = async (config) => {
  return Knex({
    client: "pg",
    connection: {
      user: process.env.DB_USER, 
      password: process.env.DB_PASS, 
      database: process.env.DB_NAME, 
      host: process.env.INSTANCE_UNIX_SOCKET,
    },
    ...config,
  });

  
};
