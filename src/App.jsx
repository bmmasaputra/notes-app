import React from 'react';
import { getInitialData } from './utils/data';
import NotesList from './component/NotesList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onMoveEventHandler = this.onMoveEventHandler.bind(this);
  }

  onDeleteEventHandler(event) {}

  onArchiveEventHandler(event) {}

  onMoveEventHandler(event) {}

  render() {
    return (
      <>
        <h1>Notes App</h1>
        <h2>Active Notes</h2>
        <NotesList
          notes={this.state.notes}
          isArchive={false}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
          onMove={this.onMoveEventHandler}
        ></NotesList>
        <h2>Archived Notes</h2>
        <NotesList
          notes={this.state.notes}
          isArchive={true}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
          onMove={this.onMoveEventHandler}
        ></NotesList>
      </>
    );
  }
}

export default App;
