import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div>
            <h2>I'm sorry but that page does not exist.</h2>
            <Link to="/">Click here to go back home</Link>
        </div>
    );
}