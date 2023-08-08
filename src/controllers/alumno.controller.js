import { pool } from "../database/database.js";
export const getAlumnoAll = async (req, res) => {
  pool.query(
    "select * from ALUMNO;",
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar contribuyente");
      }
    }
  );
};