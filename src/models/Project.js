const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'O titulo do projeto e obrigatorio.'],
        trim: true, //Remove espacos brancos do inicio e fim.
        maxlenght: [100, 'O titulo nao pode passar de 100 caracteres <title>'],
    },

    description: {
        type: String,
        required: [true, 'Precisa da descricao do projeto <description>'],
    },

    imageUrl: {
        type: String,
        required: [true, 'O projeto precisa de uma imagem <imageUrl>'],
    },

    technologies: {
        type: String,
        required: [true, 'O projeto precisa de suas tecnologias principais <technologies>'],
    },

    projectUrl: {
        type: String,
        trim: true,
    },

    repoUrl: {
        type: String,
        required: [true, 'O projeto precisa de um repositorio do github <repoUrl>'],
    },

    isFeatured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Project', projectSchema);