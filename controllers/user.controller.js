
const Usuario  = require('../models/user.model')

const CrearUsuario = (req,res)=>{  
    
    const user = req.body;
    
    const newUser = new Usuario(user)
    newUser.save()
    res.status(200).json({
        ok: true, 
        user    
    })
}

module.exports = { CrearUsuario }