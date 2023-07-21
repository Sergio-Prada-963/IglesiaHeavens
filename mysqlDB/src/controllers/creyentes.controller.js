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
        conection_result(res,["SELECT * FROM categorias"])
    } catch (error) {
        errores(res,error)
    }
}

const getCreyentesId = async (req,res)=> {
    try {
        const {id} = req.params;
        conection_result(res,["SELECT * FROM categorias WHERE CategoriaID = ?", id])
    } catch (error) {
        errores(res,error)
    }
}

const addCreyentes= async (req,res)=> {
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const data = {CategoriaNombre, Descripcion, Imagen};
        conection_result(res,["INSERT INTO categorias SET ?",data])
    } catch (error) {
        errores(res,error)
    }
}

const deleteCreyentes= async (req,res)=>{
    try {
        const {id} = req.params;
        conection_result(res,["DELETE FROM categorias WHERE CategoriaID = ?", id]);
    } catch (error) {
        errores(res,error)
    }
}

const updateCreyentes= async (req,res)=> {
    try {
        const {id} = req.params;
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const data = {CategoriaNombre, Descripcion, Imagen};
        conection_result(res,["UPDATE categorias SET ? WHERE CategoriaID = ?",[data,id]]);
    } catch (error) {
        errores(res,error)
    }
}

export const methodsHTTP = {
    getCreyentes ,
    getCreyentesId,
    addCreyentes,
    deleteCreyentes,
    updateCreyentes
}