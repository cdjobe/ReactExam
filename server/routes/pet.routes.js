const PetController = require('../controllers/pet.controller');

module.exports = function(app) {
	app.get('/api', PetController.index);
	app.post('/api/createPet', PetController.createPet);
	app.get('/api/getAllPets', PetController.getAllPets);
	app.get('/api/getPet/:id', PetController.getPet);
	app.put('/api/updatePet/:id', PetController.updatePet);
	app.delete('/api/deletePet/:id', PetController.deletePet);
}
