import {Schema,model} from('mongoose');

const CreyenteSchema = Schema({
    nombre:{type:String,required:[true],trim:true},
    ministerio:{type:String,required:[true],trim:true,enum:["Adoracion", "Mujeres", "jovenes", "Hombres"]},
    nivelFormacion:{type:String,required:[true],trim:true,enum:["Liderazgo", "Anciano"]},
    edad:{type:Number,required:[true],trim:true},
    nivelRuta:{type:String,required:[true],trim:true,enum:["nuevo", "consolidado", "enviado"]}
})

const Creyente = model('creyente',CreyenteSchema);
export default Creyente
