import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRaceName } from '../actions'
import { toast } from "react-toastify";
import st from'./SearchBar.module.css'

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const error = useSelector(state => state.error)

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getRaceName(name))
        setName('')
        setCurrentPage(1)
    }
    
    return (
        <div>
            <input
                type='text'
                placeholder="Search dog race"
                name="name"
                onChange={handleInputChange}
                value={name}
            />
            <button
                type="submit"
                onClick={handleSubmit}
                >Search
            </button>
            {error && error.length > 0 && <p>{error}</p>}
        </div>
    )
}