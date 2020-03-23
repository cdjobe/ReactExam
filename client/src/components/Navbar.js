import React from 'react';
import { Link } from '@reach/router';
import '../bootstrap.css';

export default props => {
    return (
        <div id="navbar">
            <h1>
                Pet Shelter
            </h1>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/pets/new">Add a pet</Link>
        </div>     
        
    )
}