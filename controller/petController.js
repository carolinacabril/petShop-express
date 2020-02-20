const petModel = require('../model/pet')

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets()) 
    }, 
    add: (req, res) => {
        let novoPet = req.params
        petModel.adicionarPet(novoPet)
        res.send(`Pet adicionado ${novoPet.nome} com sucesso!`)
    },
    buscar: (req, res) => {
        let pet = req.params.nome
        let resultado = petModel.buscarPet(pet)
        res.send(`Possui ${resultado.length} pet com o nome ${pet}`)
    }
}

module.exports = petController