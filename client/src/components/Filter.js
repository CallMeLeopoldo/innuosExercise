import React from 'react'
import {Button} from './Button'
import "./Filter.css"

function Filter(){

    return (
        <div className="filter-container">
            <h1 className="filters">Filters:</h1>
            <Button id="locBut" other="qubBut" source="LOCAL">Local</Button>
            <Button id="qubBut" other="locBut" source="QOBUZ">Qobuz</Button>
        </div>
    );
}

export default Filter;

