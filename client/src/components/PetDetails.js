import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import AdoptButton from './AdoptButton';
import LikeButton from './LikeButton';
import '../App.css';
import '../bootstrap.css';
import thumbsup from '../index.png'

export default props => {
    const [ pet, setPet ] = useState();
    const [ loaded, setLoaded ] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/getPet/" + props.id)
            .then(response => {
                setPet(response.data[0]);
                console.log(response);
                setLoaded(true);
            })
            .catch(error => {
                console.log(error)
        });
    }, []);

    const likeHandler=(e)=>{
        setLoaded(false);
        const likeCount = pet.numberOfLikes + 1;
        setPet({...pet, numberOfLikes:  likeCount})
        console.log(pet);
        axios.put("http://localhost:8000/api/updatePet/" +props.id, pet)
            .then(response => {
                setLoaded(true)
                console.log(pet)
            })
            .catch(error => {
                console.log(error)
        });
    }

    return (
        <div>
            <Navbar/>
            {
                loaded &&
                <div id="details">
                    <h2>Details about: {pet.name}</h2>
                    <AdoptButton petId={pet._id} petName={pet.name} />
                <div className="petDetails container"></div>
                    <table class="table petDetails table-borderless">
                        <tr>
                            <td>Pet Type:</td>
                            <td>{pet.petType}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{pet.description}</td>
                        </tr>
                        <tr>
                            <td>Skills:</td>
                            <td>
                                <ul id="skillList">
                                    <li>{pet.skillOne}</li>
                                    <li>{pet.skillTwo}</li>
                                    <li>{pet.skillThree}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-primary like-btn" onClick={likeHandler}><img src={thumbsup} height="25px" id="thumbsup"/>Like {pet.name}</button></td>
                            <td><span className="numLikes">No. of Likes {pet.numberOfLikes}</span></td>
                        </tr>
                    </table>
                </div>
            }
        </div>
    )
}