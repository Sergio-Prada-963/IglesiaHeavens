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

const getDepartamento = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM Departamento"])
    } catch (error) {
        errores(res,error)
    }
}

const getDepartamentoId = async (req,res)=> {
    try {
        const {id} = req.params;
        conection_result(res,["SELECT * FROM Departamento WHERE idDepartamento = ?", id])
    } catch (error) {
        errores(res,error)
    }
}

const addDepartamento= async (req,res)=> {
    try {
        const {nombreDepartamento} = req.body;
        const data = {nombreDepartamento};
        conection_result(res,["INSERT INTO Departamento SET ?",data])
    } catch (error) {
        errores(res,error)
    }
}

const deleteDepartamento= async (req,res)=>{
    try {
        const {id} = req.params;
        conection_result(res,["DELETE FROM Departamento WHERE idDepartamento = ?", id]);
    } catch (error) {
        errores(res,error)
    }
}

const updateDepartamento= async (req,res)=> {
    try {
        const {id} = req.params;
        const {nombreDepartamento} = req.body;
        const data = {nombreDepartamento};
        conection_result(res,["UPDATE Departamento SET ? WHERE idDepartamento = ?",[data,id]]);
    } catch (error) {
        errores(res,error)
    }
}

export const methodsHTTP = {
    getDepartamento,
    getDepartamentoId,
    addDepartamento,
    deleteDepartamento,
    updateDepartamento
}