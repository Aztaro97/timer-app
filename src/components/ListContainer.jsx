import React from 'react'
import Container from "./Container"

function ListContainer(props) {
    const RenderContainer = () => {

        return props.timers.map(timer => {
        return <Container
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={props.onFormSubmit}
                onDelete={props.onDelete}
                onPauseClick={props.onPauseClick}
                onPlayClick={props.onPlayClick}
            />
        })
    }
    return (
        <div>
            { RenderContainer() }
        </div>
    )
}

export default ListContainer
