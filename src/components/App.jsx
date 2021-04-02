import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notesArray, setNotesArray] = useState([]);

    function addNote(newNote) {
        setNotesArray( (prevNotesArray) => {
            return [newNote, ...prevNotesArray]
        } );
    }

    function deleteNote(id) {
        setNotesArray( (prevNotesArray) => {
            return prevNotesArray.filter( (note, index) => {
                    return id !== index;
                } );
        });
    }

    return (
        <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notesArray.map((note, index) => {
            return (<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />) }
            )}
        <Footer />
        </div>
    );
}

export default App;