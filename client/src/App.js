import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import axios from 'axios';

import Main from './views/Main';
import Edit from './views/Edit';
import PetForm from './components/PetForm';
import PetDetails from './components/PetDetails';

import './App.css';
import './bootstrap.css'

function App() {

  const [ errors, setErrors ] = useState([]);

  const createPet=(pet)=>{
    axios.post('http://localhost:8000/api/createPet', pet)
      .then(response=>{
        console.log(response)
        navigate("/");
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }

  return (
    <div className="App">
    <script src="https://kit.fontawesome.com/085625558e.js" crossorigin="anonymous"></script>
      <Router>
        <Main path="/" />
        <PetForm path="/pets/new" onSubmitProp={createPet}
          initialName=""
          initialPetType=""
          initialDescription=""
          initialSKillOne=""
          initialSkillTwo=""
          initialSkillThree=""
          formErrors={errors}
          action="create"
         />
        <Edit path="/pets/:id/edit" formErrors={errors} />
        <PetDetails path="/pets/:id" />
      </Router>
    </div>
  )
}


export default App;
