import {pool} from '../database/database'

export const getProyectoAll = async(req,res)=>{
   pool.query(
    "SELECT * FROM PROYECTO;",
    function (err,result) {
        try {
          return res.status(200).json(result)
        } catch (error) {
          return res.status(500).json("Error al listar", error)
        }
    }
  );
}

export const deleteProject = async (req,res,id)=>{
  pool.query("delete from PROYECTO WHERE id_proyecto = ? ",[id],function (err,result) {
    try {
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json("Error al listar",error);
    }
  })
}