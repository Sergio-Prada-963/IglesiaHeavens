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

const getBarrio = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM Barrio"])
    } catch (error) {
        errores(res,error)
    }
}

const getBarrioId = async (req,res)=> {
    try {
        const {id} = req.params;
        conection_result(res,["SELECT * FROM Barrio WHERE idBarrio = ?", id])
    } catch (error) {
        errores(res,error)
    }
}

const addBarrio= async (req,res)=> {
    try {
        const {nombreBarrio, idComuna} = req.body;
        const data = {nombreBarrio, idComuna};
        conection_result(res,["INSERT INTO Barrio SET ?",data])
    } catch (error) {
        errores(res,error)
    }
}

const deleteBarrio= async (req,res)=>{
    try {
        const {id} = req.params;
        conection_result(res,["DELETE FROM Barrio WHERE idBarrio = ?", id]);
    } catch (error) {
        errores(res,error)
    }
}

const updateBarrio= async (req,res)=> {
    try {
        const {id} = req.params;
        const {nombreBarrio, idComuna} = req.body;
        const data = {nombreBarrio, idComuna};
        conection_result(res,["UPDATE Barrio SET ? WHERE idBarrio = ?",[data,id]]);
    } catch (error) {
        errores(res,error)
    }
}

export const methodsHTTP = {
    getBarrio,
    getBarrioId,
    addBarrio,
    deleteBarrio,
    updateBarrio
}