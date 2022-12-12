import React from "react";
import "./styles/NewItem.css"

function NewItem() {
    return <div className="new-item-container">
        <h1>Create New Item</h1>
        <form>
            <div className="form-group">
                <p class="mt-3 mb-1">Item Name</p>
                <input className="form-control w-50" id="name"></input>
            </div>

            <div className="form-group">
                <p class="mt-3 mb-1">Item Model</p>
                <input className="form-control w-50" id="name"></input>
            </div>            

            <button className="btn btn-lg btn-info">Create Item</button>
        </form>
    </div>
}

export default NewItem;