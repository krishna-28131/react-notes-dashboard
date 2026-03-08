import React, { useContext, useMemo } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteStats = () => {
    const { notes } = useContext(NotesContext);

    // Compute total number of notes efficiently using useMemo
    const totalNotes = useMemo(() => {
        return notes.length;
    }, [notes]);

    return (
        <div className="note-stats">
            <h3>Total Notes: {totalNotes}</h3>
        </div>
    );
};

export default NoteStats;
