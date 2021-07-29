const {response, request} = require('express');

const usuariosGet = (req = request , res) =>{
    const params = req.query
    res.json({
        msg: 'get API - controlador'
    });
}
const usuariosPost = (req , res = response) =>{
    const {nombre , edad} = req.body;

    
    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    });
}
const usuariosPut = (req , res) =>{
    const {id} = req.params;
    res.json({
        msg: 'put API - usuariosPut',
        id 
    });

}
const usuariosDelete = (req , res) =>{
     
    res.json({
        msg: 'delete API - usuariosDelete'
    });
    
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}