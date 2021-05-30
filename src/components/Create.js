import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Create(prop) {
    return (

        <div>
            <label>List of categories</label>
            <select multiple className="form-control" id="category">
                <option>"Sporting Goods"</option>
                <option>"Game"</option>
                <option>"Electronics"</option>

            </select>
            <form>
                <input type="submit" value="Submit"></input>
            </form>
        </div >

    )

}

export default Create;

