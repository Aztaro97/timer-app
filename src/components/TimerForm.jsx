import React, {useState} from 'react'
import "../stylesheets/TimerForm.css"


function TimerForm(props) {
    const [title, setTitle] = useState(props.title || "")
    const [project, setproject] = useState(props.project || "")

    const SubmitText = props.title ? "Modifier" : "Creer";

    const handleChangeTile = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeproject = (e) => {
        setproject(e.target.value)
    }
    const handleSubmit = () => {
        props.onFormSubmit({
          id: props.id,
          title: title,
          project: project
        });
      };
    return (
        <div>
            <div>
                <div className="form-group">
                    <label htmlFor="title__timerForm">Titre</label>
                    <input className="form-control" placeholder="Mon titre" id="title" type="text" value={title} onChange={handleChangeTile}/>
                </div>
                <div className="form-group">
                    <label htmlFor="projet__timerForm">project</label>
                    <input className="form-control" placeholder="Mon projet" id="projet" type="text" value={project} onChange={handleChangeproject}/>
                </div>
                <div className="btns">
                    <button className="edit_btn" onClick={handleSubmit}>
                        {SubmitText}
                    </button>
                    <button className="cancel_btn" onClick={props.onCloseForm}>Annuler</button>
                </div>
            </div>
        </div>
    )
}

export default TimerForm
