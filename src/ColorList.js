import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
    return (
        <div>
            <button><Link style={{ textDecoration: 'none' }} to='/colors/new'>Add a Color?</Link></button>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {colors.map(color =>
                    <li key={color.color}><Link to={`/colors/${color.color}`}>{color.color}</Link></li>
                )}
            </ul >
        </div>

    );
}

export default ColorList;