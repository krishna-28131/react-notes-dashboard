import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteList = () => {
    const { notes, deleteNote, selectedNoteId, setSelectedNoteId } = useContext(NotesContext);

    if (notes.length === 0) {
        return <p className="empty-message">No notes added yet.</p>;
    }

    return (
        <ul className="note-list">
            {notes.map((note) => (
                <li
                    key={note.id}
                    className={`note-item ${selectedNoteId === note.id ? 'selected' : ''}`}
                    onClick={() => setSelectedNoteId(note.id)}
                >
                    <div className="note-content">
                        <p>{note.text}</p>
                        <small>{new Date(note.createdAt).toLocaleString()}</small>
                    </div>
                    <button
                        className="delete-button"
                        onClick={(e) => {
                            e.stopPropagation(); // prevent selecting when deleting
                            deleteNote(note.id);
                        }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default NoteList;
