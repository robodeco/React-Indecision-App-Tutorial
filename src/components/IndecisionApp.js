import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  //fires when component loads
  //upon loading the applicaiton, fetch the information from localStorage and parse the JSON into a javascript array (if the json was derived from an array

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
        //if (option), an item in the options array, is not equal to (optionToRemove), the item being deleted, then implicitly return true on (option), and keep it in the array. otherwise if the two are equal, remove that specific one from the array. returning true statically will not delete anything, and with static false it'll delete everything. here we are implicitly returning either false or true, as the machine checks whether option and optionToRemove are equal.
    }));
  }
  handlePick = () => {
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  }
  handleDeleteOptions = () => {
    //wrapping the below curly braces in parenthesis, starting at setState, implicitly returns an object
    this.setState(() => ({ options: [] }));
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter Valid Value to Add Item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This Option Already Exists';
    }
  //merging the previous array with the new array, which only has the one item that we typed in, and returning a single array.
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
    console.log(option);
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState({ options: options });
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  //fires after a component updates; when a state or prop value changes. also has access to previous values of state and props
  // if the length of the previous options state array is dissimilar to the length of the current options state array, then set the current array to localStorage as JSON
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
      console.log('saving data');
    }
  }
  //fires before component goes away
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

render() {
  const subtitle = 'Put your life in the hands of a machine';

  return (
    <div>
      <Header subtitle={subtitle} />
        <div className="container">
          <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  }
}

//stateless components like this one are faster than stateful components.
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };


//junk

// import subtract, { square, add } from './utils.js';
//
// console.log('app.js is running!');
// console.log(square(4))
// console.log(add(100, 23))
// console.log(subtract(100, 80))

// import isSenior, {isAdult, canDrink} from "./person.js";
//
// console.log(isAdult(19))
// console.log(canDrink(21))
// console.log(isSenior(64))
