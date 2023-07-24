import getConnection from "../db/database.js";

const errores = (res,error)=>{
    res.status(500);
    res.send(error.message);
}

const conection_result = async (res,sqldata)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query(...sqldata);
        res.json(result);
    } catch (error) {
        errores(res,error)
    }
}

const getComuna = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM Comuna"])
    } catch (error) {
        errores(res,error)
    }
}

const getComunaId = async (req,res)=> {
    try {
        const {id} = req.params;
        conection_result(res,["SELECT * FROM Comuna WHERE idComuna = ?", id])
    } catch (error) {
        errores(res,error)
    }
}

const addComuna= async (req,res)=> {
    try {
        const {nombreComuna, idMunicipio} = req.body;
        const data = {nombreComuna, idMunicipio};
        conection_result(res,["INSERT INTO Comuna SET ?",data])
    } catch (error) {
        errores(res,error)
    }
}

const deleteComuna= async (req,res)=>{
    try {
        const {id} = req.params;
        conection_result(res,["DELETE FROM Comuna WHERE idComuna = ?", id]);
    } catch (error) {
        errores(res,error)
    }
}

const updateComuna= async (req,res)=> {
    try {
        const {id} = req.params;
        const {nombreComuna, idMunicipio} = req.body;
        const data = {nombreComuna, idMunicipio};
        conection_result(res,["UPDATE Comuna SET ? WHERE idComuna = ?",[data,id]]);
    } catch (error) {
        errores(res,error)
    }
}

export const methodsHTTP = {
    getComuna,
    getComunaId,
    addComuna,
    deleteComuna,
    updateComuna
}