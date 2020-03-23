import React, { useEffect } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'
import home from '../home-solid.svg';
export default props => {

    var petId = props.petId;
    var petName = props.petName;
    const adoptPet=(petId)=>{
        // hopefully the pet is just getting adopted and not deleted
        axios.delete('http://localhost:8000/api/deletePet/' + petId)
            .then(response=>{
                props.removeFromDom(petId);
            });
            navigate('/');
    }

    return (
        <button className="btn btn-danger adopt-btn" onClick={(e)=>adoptPet(petId)}> <img src={home} id="homeimg" height="25px"></img>Adopt {petName} </button>
    )

}