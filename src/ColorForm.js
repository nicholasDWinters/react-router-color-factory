import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ColorForm = ({ addColor }) => {
    const history = useHistory();
    const INITIAL_STATE = {
        color: '',
        hex: '#ffffff'
    }
    const [data, setData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addColor(data);
        setData(INITIAL_STATE);
        history.push('/colors');
    }

    return (
        <div>
            <h1>Color Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color Name</label>
                <input
                    id="color"
                    type="text"
                    name="color"
                    placeholder="New Color"
                    value={data.color}
                    onChange={handleChange}
                />

                <input
                    id="color"
                    type="color"
                    name="hex"

                    value={data.hex}
                    onChange={handleChange}
                />
                <button>Add Color</button>
            </form>
            <Link to='/colors'>Back to Colors</Link>
        </div>

    )
}

export default ColorForm;