import React, { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    const [selectedNoteId, setSelectedNoteId] = useState(null);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        const newNote = {
            id: Date.now().toString(),
            text,
            createdAt: new Date().toISOString()
        };
        setNotes([newNote, ...notes]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
        if (selectedNoteId === id) {
            setSelectedNoteId(null);
        }
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote, selectedNoteId, setSelectedNoteId }}>
            {children}
        </NotesContext.Provider>
    );
};
