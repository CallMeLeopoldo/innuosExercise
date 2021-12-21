import React, {useState} from 'react'
import {useDispatch } from 'react-redux'
import {filter} from '../features/listReducer'
import "./Button.css"

export const Button = ({
    id,
    source,
    other,
    children
}) => {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    const dispatch = useDispatch();

    const changeOtherState = (elem) => {
        if(document.getElementById(elem).className === 'disable-button'){
            document.getElementById(elem).click();
        }

    }

    return (
        <button
            id={id}
            className={click ? 'disable-button' : 'filter-button'}
            onClick={() => {handleClick(); changeOtherState(other); dispatch(filter(source))}}
        >
            {children}
        </button>
    );
};