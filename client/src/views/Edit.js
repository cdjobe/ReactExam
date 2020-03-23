import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';
import { navigate } from '@reach/router';

export default props => {
    const id  = props.id;
    const [ pet, setPet ] = useState();
    const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState(props.formErrors);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getPet/' + id)
            .then(response=>{
                console.log(response)
                setPet(response.data[0]);
                setLoaded(true);            
            })            
    }, [])

    const updatePet=(pet)=>{
        console.log(pet)
        axios.put('http://localhost:8000/api/updatePet/'+ id, pet)
            .then(response => {
                console.log(response)
                navigate("/");
            })
            .catch(error=>{
                const errorResponse = error.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // set errors
                setErrors(errorArr)
                console.log(errorArr)
            })  
    }

    return (
        <div>
            {loaded && 
                <PetForm
                    onSubmitProp={updatePet} 
                    initialName={pet.name} 
                    initialPetType={pet.petType}
                    initialDescription={pet.description}
                    initialSkillOne={pet.skillOne}
                    initialSkillTwo={pet.skillTwo}
                    initialSkillThree={pet.skillThree}
                    formErrors={errors}
                    action="Edit"
                />
            }
        </div>
    )
}