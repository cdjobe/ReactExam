import React, { useState } from 'react';
import { navigate } from '@reach/router';

import upload from '../upload.png'
import Navbar from './Navbar';

export default props => {
    const { initialName, 
            initialPetType, 
            initialDescription, 
            initialSkillOne, 
            initialSkillTwo, 
            initialSkillThree,
            onSubmitProp } = props;
    
    const [ name, setName ] = useState( initialName );
    const [ petType, setPetType ] = useState( initialPetType );
    const [ description, setDescription ] = useState( initialDescription );
    const [ skillOne, setSkillOne ] = useState( initialSkillOne );
    const [ skillTwo, setSkillTwo ] = useState ( initialSkillTwo );
    const [ skillThree, setSkillThree ] = useState ( initialSkillThree );
    const [ errors, setErrors ] = useState([]);
    const [ submitted, setSubmitted ] = useState(false);


    const onSubmitHandler=(e)=>{
        e.preventDefault();
        onSubmitProp({name, 
                        petType, 
                        description, 
                        skillOne, 
                        skillTwo,
                        skillThree});

    };

    return (
        <div>
            <Navbar />
            <form onSubmit={onSubmitHandler} className="form">
                <div id="required-details">
                    <div className="form-group">
                        <label>Pet Name:</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={initialName}
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
                <button type="submit" className="btn btn-primary"><img src={upload} height="20px"/> {props.action} Pet</button>
            </form>
        </div>
    )
}