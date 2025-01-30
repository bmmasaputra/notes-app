import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value;
    if (inputTitle.length <= this.state.titleLimit) {
      this.setState(() => ({ title: inputTitle }));
    } else {
      alert('Note title can not exceed 50 character');
    }
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
    const remainingChars = this.state.titleLimit - this.state.title.length;
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            className="note-input__title"
            onChange={this.onTitleChangeEventHandler}
          />
          <p
            className="note-input__title__char-limit"
            style={{ color: remainingChars === 0 ? 'red' : 'inherit' }}
          >
            {remainingChars}
          </p>
        </div>
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
