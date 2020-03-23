import React, { useState } from 'react';
import { Router } from '@reach/router';

import Navbar from '../components/Navbar';
import PetList from '../components/PetList';


export default () => {
    
    return (
        <div className="container">
            <Navbar />

            <PetList />
        </div>
    )
}