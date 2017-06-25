var config = {
  user: process.env.DB_USER,
  database: process.env.DB,
  password: process.env.DB_PWD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  max: process.env.DB_MAX_POOL,
  min: process.env.DB_MIN_POOL,
  idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT
};
module.exports = config;