import React, { useState } from "react";
import "./styles/NewItem.css";
import axios from "axios";

function NewItem() {
    const [input, setInput] = useState({
        name: '',
        model: '',
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        const newItem = {
            name: input.name,
            model: input.model
        }
        event.preventDefault();
        axios.post('http://localhost:3001/create', NewItem)
    }

    return <div className="new-item-container">
        <h1>Create New Item</h1>
        <form>
            <div className="form-group">
                <p class="mt-3 mb-1">Item Name</p>
                <input onChange={handleChange} name="name" value={input.name} className="form-control w-50"></input>
            </div>

            <div className="form-group">
                <p class="mt-3 mb-1">Item Model</p>
                <input onChange={handleChange} name="model" value={input.model} className="form-control w-50" id="name"></input>
            </div>            

            <button onClick={handleClick} className="btn btn-lg btn-info">Create Item</button>
        </form>
    </div>
}

export default NewItem;