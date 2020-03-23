import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

export default props => {
    
    const [ allPets, setAllPets ] = useState(null);
    const [ loaded, setLoaded ] = useState(false);
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/getAllPets')
            .then(response=>{
                setAllPets(response.data);
                setLoaded(true);
            })
    }, [])

    const removeFromDom=(petId)=>{
        setAllPets(allPets.filter(pet=>pet._id !== petId));
    }

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loaded &&
                        allPets.map((pet, i)=>{
                            return <tr>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td> <Link to={`/pets/${pet._id}/edit`}>Edit</Link> |
                                    <Link to={`/pets/${pet._id}`}>Details</Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}