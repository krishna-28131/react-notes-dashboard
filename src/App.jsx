import React from 'react';
import { NotesProvider } from './context/NotesContext';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import NoteStats from './components/NoteStats';
import './App.css';

function App() {
  return (
    <NotesProvider>
      <div className="app-container">
        <h1>React Notes Dashboard</h1>
        <NoteStats />
        <AddNote />
        <NoteList />
      </div>
    </NotesProvider>
  );
}

export default App;
