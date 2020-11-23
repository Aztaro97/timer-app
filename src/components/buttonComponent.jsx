import React from 'react'
import "../stylesheets/button.css"

function ButtonComponent({handleFormOpen}) {
    return (
        <div>
            <button onClick={handleFormOpen} className="Action__btn">+</button>
        </div>
    )
}

export default ButtonComponent;
