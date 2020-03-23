import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';

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
        axios.put('http://localhost:8000/api/updatePet/'+ id, pet)
            .then(response => console.log(response))
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
                <Navbar />
            <form onSubmit={onSubmitHandler} className="form">
                <div id="required-details">
                    <div className="form-group">
                        <label>Pet Name:</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={pet.name}
                            onChange={(e)=>{ setName( e.target.value )}} />
                    </div>
                    <div className="form-group">
                        <label>Pet Type:</label>
                        <input
                            type="text"
                            name="petType"
                            defaultValue={initialPetType}
                            onChange={(e)=>{ setPetType( e.target.value )}} />
                    </div>
                    <div className="form-group">
                        <label>Pet Description:</label>
                        <input
                            type="text"
                            name="description"
                            defaultValue={initialDescription}
                            onChange={(e)=>{ setDescription( e.target.value )}} />
                    </div>
                </div>
                <div id="optional-details">
                    <div className="form-group">
                        <label>Skill 1:</label>
                        <input
                            type="text"
                            name="skillOne"
                            defaultValue={initialSkillOne}
                            onChange={(e)=>{ setSkillOne( e.target.value )}} />
                    </div>
                    <div className="form-group">
                        <label>Skill 2:</label>
                        <input
                            type="text"
                            name="skillTwo"
                            defaultValue={initialSkillTwo}
                            onChange={(e)=>{ setSkillTwo( e.target.value )}} />
                    </div>
                    <div className="form-group">
                        <label>Skill 3:</label>
                        <input
                            type="text"
                            name="skillThree"
                            defaultValue={initialSkillThree}
                            onChange={(e)=>{ setSkillThree( e.target.value )}} />
                    </div>
                </div>
                <div>
                    { errors &&
                        props.formErrors.map((err, index) => <p key={index}>{err}</p>)}
                </div>
                <button type="submit" className="btn btn-primary">Edit Pet</button>
            </form>
            }
        </div>
    )
}