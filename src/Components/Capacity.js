import React from 'react';
import '../css/Capacity.css';

class Capacity extends React.Component{
    render() {
        return (
            <div>
                <h2>Shelters</h2>
                <label>Shelter Name: </label><br/>
                <label>Shelter Location: </label><br/>
                <label>Current Quantity: </label><br/>
                <label>Total Capacity: </label>    
            </div>
        )
    }
}

export default Capacity;