import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [noteText, setNoteText] = useState({
        title: "",
        content: ""
    });

    const [isBoxClicked, setBoxClicked] = useState(false);

    function expandNoteArea() {
        setBoxClicked(true);
    }

    function handleChange(event) {
        const inputName = event.target.name;
        const inputContent = event.target.value;

        setNoteText( (prevNote) => {
            return {
                ...prevNote, [inputName]: inputContent
            };
        } );
    }

    function submitNote(event) {
        props.onAdd(noteText);
        setNoteText({title: "", content: ""});
        event.preventDefault();
    }

    return (
        <div>
        <form className="create-note">
            {isBoxClicked ? <input name="title" placeholder="Title" onChange={handleChange} value={noteText.title}/> : null}
            <textarea onClick={expandNoteArea} name="content" placeholder="Take a note..." rows={isBoxClicked ? "3" : "1"} onChange={handleChange} value={noteText.content}/>
            <Zoom in={isBoxClicked}>
                <Fab onClick={submitNote} ><AddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
