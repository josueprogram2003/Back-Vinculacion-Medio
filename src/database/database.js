import  mysql  from "mysql2";

export const pool =  mysql.createConnection ({
  host: "containers-us-west-99.railway.app",
  user: "root",
  password: "VFX2rk1lVuCsKMFEmA58",
  database: "railway",
  port: 7774,
  ssl: { rejectUnauthorized: false },
});
