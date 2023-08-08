import  mysql  from "mysql2";

export const pool =  mysql.createConnection ({
  host: "containers-us-west-134.railway.app",
  user: "root",
  password: "8g5W0lFZl8TQQBm7xGjQ",
  database: "railway",
  port: 5782,
  ssl: { rejectUnauthorized: false },
});
