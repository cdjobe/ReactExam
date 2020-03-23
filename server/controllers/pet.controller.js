const { Pet } = require('../models/pet.model');

module.exports.index = ( request, response ) => {
	response.json({
		message: "Hello World"
	});
}

module.exports.createPet = ( request, response ) => {
	const { name, petType, description, skillOne, skillTwo, skillThree }  = request.body;
	Pet.create({
		name,
        petType,
        description,
        skillOne,
        skillTwo,
        skillThree
	})
		.then(pet => response.json( pet ))
		.catch(error => response.status(400).json(error));
}

module.exports.getAllPets = ( request, response ) => {
	Pet.find()
		.then(allPets => response.json( allPets ))
		.catch(error => response.json( error ));
}

module.exports.getPet = ( request, response ) => {
	Pet.find({_id:request.params.id})
		.then( pet => response.json( pet ))
		.catch( error => response.json( error ))
		
}

module.exports.updatePet = ( request, response ) => {
	console.log(request);
	Pet.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true, context: 'query' })
		.then(updatedPet => response.json( updatedPet ))
		.catch(error => response.status(400).json( error ));
}

module.exports.deletePet = ( request, response ) => {
	Pet.deleteOne({ _id: request.params.id })
		.then(deleteConfirmation => response.json( deleteConfirmation ))
		.catch(error => response.json( error ));
}