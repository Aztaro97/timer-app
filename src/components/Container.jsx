import React, {useState} from 'react'
import TimerForm from "./TimerForm";
import Timer from "./Timer"
import "../stylesheets/container.css"

function Container(props) {
    const [isFormOpen, setIsFormOpen] = useState(false)
    
    const onEditFormOpen = () => {
        setIsFormOpen(true)
    }
    const handleEditFormClose = () => {
        setIsFormOpen(false)
    }

    return (
       <div className="container">
            {isFormOpen ?
            <TimerForm 
                title={props.title}
                project={props.project}
                id={props.id}
                onFormSubmit={props.onFormSubmit}
                onCloseForm={handleEditFormClose}
                /> :
            <Timer
                title={props.title}
                project={props.project}
                id={props.id}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
                onEditFormOpen={onEditFormOpen}
                onDelete={props.onDelete}
                onPauseClick={props.onPauseClick}
                onPlayClick={props.onPlayClick}
            />
        }
       </div>
    )
}

export default Container
