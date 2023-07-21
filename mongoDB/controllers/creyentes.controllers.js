import Creyente from "../models/creyente.js";
const obtenerCreyente = async(req,res)=>{
    try {
        const ciclista = await Creyente.find();
        res.json(ciclista)
    } catch (error) {
        res.status(404)
        res.send({error: "No funshion :("})
    }
}
const addCreyente = async(req,res)=>{
    try {
        const {nombre} = req.body
        const creyente = new Creyente(req.body);
        //verificar si el nombre ya existe 
        const name = await Creyente.findOne({nombre});
        if(name)
            return res.status(400).json({message:"El nombre ya esta registrado"});
        await creyente.save();
        res.json(creyente);
    } catch (error) {
        res.status(404)
        res.send({error: "No funshion :("})
    }
}
const getId = async(req,res)=>{
    try {
        const creyente = await Creyente.findOne({_id:req.params.id});
        res.json(creyente)
    } catch (error) {
        res.status(404)
        res.send({error: "No funshion :("})
    }
}
const deleteCreyente = async(req,res)=>{
    try {
        await Creyente.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No funshion :("})
    }
}
const updateCreyente = async(req,res)=>{
    try {
        const {nombre} = req.body
        const name = await Creyente.findOne({nombre});
        if(name)
            if((name._id).toString() != req.params.id)
            return res.status(400).json({message:"El nombre ya esta registrado"});
        const creyente = await Creyente.findOneAndUpdate({_id: req.params},req.body,{new:true});
        res.json(creyente)
    } catch (error) {
        res.status(404)
        res.send({error: "No funshion :("})
    }
}
export {addCreyente, getId, deleteCreyente, updateCreyente, obtenerCreyente}