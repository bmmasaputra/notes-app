import React from 'react';

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => ({ search: event.target.value }));
    this.props.onSearch({ search: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="note-header__search-field"
        placeholder="Search"
        onChange={this.onSearchChangeEventHandler}
      />
    );
  }
}

export default SearchField;
