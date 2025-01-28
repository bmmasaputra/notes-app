import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => ({ title: event.target.value }));
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => ({ body: event.target.value }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          className="note-input__title"
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Body"
          value={this.state.body}
          className="note-input__body"
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NoteInput;
