import React from 'react';

const PortfolioItem = (props) => (
    <div>
        <h2>This is what I've done</h2>
        <h3>For item {props.match.params.id} on my portfolio</h3>
    </div>
);

export default PortfolioItem;