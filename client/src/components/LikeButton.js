import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

export default props => {

    var petId = props.petId;
    var petName = props.petName;

    const [ pet, setPet ] = useState();
    const adoptPet=(petId)=>{
        // hopefully the pet is just getting adopted and not deleted
        axios.delete('http://localhost:8000/api/deletePet/' + petId)
            .then(response=>{
                props.removeFromDom(petId);
            });
            navigate('/');
    }

    return (
        <button className="btn btn-success like-btn" onClick={(e)=>adoptPet(petId)}> Like {petName} </button>
    )

}