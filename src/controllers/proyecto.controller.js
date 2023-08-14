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

export const agregarProject = async (req,res,data)=>{
  // console.log(data)
  pool.query("INSERT INTO PROYECTO (nombreProyecto,objetivoProyecto,descripcionProyecto,localidad,poblacionBenficiada,presupuesto,TIPO_PROYECTO_id_tipoProyecto)VALUES(?,?,?,?,?,?,?);",[data.nombreProyecto,data.objetivoProyecto,data.descripcionProyecto,data.localidad,data.poblacionBenficiada,data.presupuesto,data.TIPO_PROYECTO_id_tipoProyecto],function (err,result) {
    try {
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json("Error al listar",error);
    }
  })
}