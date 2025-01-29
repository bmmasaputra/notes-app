import React from 'react';
import { getInitialData } from './utils/data';
import NotesList from './component/NotesList';
import NoteInput from './component/NoteInput';
import SearchField from './component/SearchField';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onMoveEventHandler = this.onMoveEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveEventHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: true } : note)),
    }));
  }

  onMoveEventHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: false } : note)),
    }));
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  }

  onSearchEventHandler({ search }) {
    this.setState(() => ({ search: search }));
  }

  render() {
    return (
      <>
        <header>
          <h1>Notes App</h1>
          <SearchField onSearch={this.onSearchEventHandler}></SearchField>
        </header>
        <h2>Add New Note</h2>
        <NoteInput addNote={this.onAddNoteEventHandler}></NoteInput>
        <h2>Active Notes</h2>
        <NotesList
          notes={this.state.notes}
          isArchive={false}
          search={this.state.search}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
          onMove={this.onMoveEventHandler}
        ></NotesList>
        <h2>Archived Notes</h2>
        <NotesList
          notes={this.state.notes}
          isArchive={true}
          search={this.state.search}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
          onMove={this.onMoveEventHandler}
        ></NotesList>
      </>
    );
  }
}

export default App;
