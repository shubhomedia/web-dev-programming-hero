import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    // const { ornaments } = props;
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Ornaments: {ornaments}</p>
            <p>House: {house}</p>
        </div>
    );
};

export default Special;