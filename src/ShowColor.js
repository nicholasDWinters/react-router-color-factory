import React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';

const ShowColor = ({ colors }) => {
    const { color } = useParams();
    const colorName = colors.filter(c => c.color === color);

    if (colorName.length < 1) return <Redirect to='/colors' />

    return (
        <div>
            <h1 style={{ color: `${colorName[0].hex}` }}>{colorName[0].color}</h1>
            <Link to='/colors'>Back to Colors</Link>
        </div>
    )
}

export default ShowColor;