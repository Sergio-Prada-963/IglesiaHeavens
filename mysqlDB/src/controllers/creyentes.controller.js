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

const getCreyentes = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM Creyente"])
    } catch (error) {
        errores(res,error)
    }
}

const getCreyentesId = async (req,res)=> {
    try {
        const {id} = req.params;
        conection_result(res,["SELECT * FROM Creyente WHERE ididentificacion = ?", id])
    } catch (error) {
        errores(res,error)
    }
}

const addCreyentes= async (req,res)=> {
    try {
        const {nombres, email, NroCelular, direccion, IdBarrio} = req.body;
        const data = {nombres, email, NroCelular, direccion, IdBarrio};
        conection_result(res,["INSERT INTO Creyente SET ?",data])
    } catch (error) {
        errores(res,error)
    }
}

const deleteCreyentes= async (req,res)=>{
    try {
        const {id} = req.params;
        conection_result(res,["DELETE FROM Creyente WHERE ididentificacion = ?", id]);
    } catch (error) {
        errores(res,error)
    }
}

const updateCreyentes= async (req,res)=> {
    try {
        const {id} = req.params;
        const {nombres, email, NroCelular, direccion, IdBarrio} = req.body;
        const data = {nombres, email, NroCelular, direccion, IdBarrio};
        conection_result(res,["UPDATE Creyente SET ? WHERE ididentificacion = ?",[data,id]]);
    } catch (error) {
        errores(res,error)
    }
}

export const methodsHTTP = {
    getCreyentes,
    getCreyentesId,
    addCreyentes,
    deleteCreyentes,
    updateCreyentes
}