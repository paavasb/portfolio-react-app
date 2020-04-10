import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioHome = () => (
    <div>
        <h2>This is my Portfolio Home.</h2>
        <h3>
            Please select one of the items to see - 
        </h3>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
    </div>  
);

export default PortfolioHome;