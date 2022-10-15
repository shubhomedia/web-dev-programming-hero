import React from 'react';

const Sister = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Sister</h2>
            <p>House: {house}</p>
        </div>
    );
};

export default Sister;