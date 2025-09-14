const Project = require('../models/Project');

// Funcao para criar Projeto no DB
const createProject = async (req, res) =>{
    try{
        const project = await Project.create(req.body);
    
        res.status(201).json({ project })
    } catch (error){
        res.status(500).json({ message: error.message })
    }
};


module.exports = {
    createProject,
};

