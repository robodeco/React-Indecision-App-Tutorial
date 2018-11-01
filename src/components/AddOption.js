import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

//handleAddOption is now a class property (not to be confused with class component) with the inclusion of "= (e) => {}". before it needed 'this' to be bound under the constructor (this.something = this.something.bind(this)) in order to work, because 'this' would usually bind to AddOption under a regular arrow function. arrow functions cannot bind 'this' to themselves.
  handleAddOption = (e) => {
    e.preventDefault();
    //.trim() is used to get rid of the spaces before and after a string, but not within the string
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
