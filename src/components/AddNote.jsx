import React, { useState, useRef, useEffect, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const AddNote = () => {
    const { addNote } = useContext(NotesContext);
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        // Automatically focus the input field when the page loads
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addNote(text);
            setText('');
            // Refocus after adding
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-note-form">
            <input
                type="text"
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a new note..."
                className="note-input"
            />
            <button type="submit" className="add-button">Add Note</button>
        </form>
    );
};

export default AddNote;
