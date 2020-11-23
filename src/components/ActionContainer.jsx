import React, {useState} from 'react';
import ButtonComponent from "./buttonComponent"
import TimerForm from "./TimerForm"

function ActionContainer(props) {
    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleFormOpen = () => {
        setIsFormOpen(true)
    }
    const handleCloseForm = () => {
        setIsFormOpen(false)
    }
    const handleFormSubmit = (timer) => {
        props.onFormSubmit(timer)
        setIsFormOpen(false)
    }

    return (
        <div>
            {isFormOpen ? 
                <TimerForm onFormSubmit={handleFormSubmit} onCloseForm={handleCloseForm} /> :
                <ButtonComponent handleFormOpen={handleFormOpen} />
            }
            
            
        </div>
    )
}

export default ActionContainer;
