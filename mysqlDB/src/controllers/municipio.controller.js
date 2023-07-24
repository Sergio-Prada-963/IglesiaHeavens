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

const getMunicipio = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM Municipio"])
    } catch (error) {
        errores(res,error)
    }
}

const getMunicipioId = async (req,res)=> {
    try {
        const {id} = req.params;
        conection_result(res,["SELECT * FROM Municipio WHERE idMunicipio = ?", id])
    } catch (error) {
        errores(res,error)
    }
}

const addMunicipio= async (req,res)=> {
    try {
        const {NombreMunicipio, idDepartamento} = req.body;
        const data = {NombreMunicipio, idDepartamento};
        conection_result(res,["INSERT INTO Municipio SET ?",data])
    } catch (error) {
        errores(res,error)
    }
}

const deleteMunicipio= async (req,res)=>{
    try {
        const {id} = req.params;
        conection_result(res,["DELETE FROM Municipio WHERE idMunicipio = ?", id]);
    } catch (error) {
        errores(res,error)
    }
}

const updateMunicipio= async (req,res)=> {
    try {
        const {id} = req.params;
        const {NombreMunicipio, idDepartamento} = req.body;
        const data = {NombreMunicipio, idDepartamento};
        conection_result(res,["UPDATE Municipio SET ? WHERE idMunicipio = ?",[data,id]]);
    } catch (error) {
        errores(res,error)
    }
}

export const methodsHTTP = {
    getMunicipio,
    getMunicipioId,
    addMunicipio,
    deleteMunicipio,
    updateMunicipio
}