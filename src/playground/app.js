class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  //fires when component loads
  //upon loading the applicaiton, fetch the information from localStorage and parse the JSON into a javascript array (if the json was derived from an array
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
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
        //if (option), an item in the options array, is not equal to (optionToRemove), the item being deleted, then implicitly return true on (option), and keep it in the array. otherwise if the two are equal, remove that specific one from the array. returning true statically will not delete anything, and with static false it'll delete everything. here we are implicitly returning either false or true, as the machine checks whether option and optionToRemove are equal.
    }));
  }
  handlePick() {
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let pick = this.state.options[randomNum]
    alert(pick);
  }
  handleDeleteOptions() {
    //wrapping the below curly braces in parenthesis, starting at setState, implicitly returns an object
    this.setState(() => ({ options: [] }));
  }
  handleAddOption(option) {
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

render() {
  const subtitle = 'Put your hands in the life of a machine';

  return (
    <div>
      <Header subtitle={subtitle} />
      <Action
      hasOptions={this.state.options.length > 0}
      handlePick={this.handlePick}
      />
      <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption
        handleAddOption={this.handleAddOption}
      />
    </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

//a placeholder for the 'title' prop on Header for when no prop is passed down
Header.defaultProps = {
  title: 'Indecision'
};

//this is a statless functional component. it does not need "this"
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}> Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          //without passing the correct information through the handleDeleteOption function as shown below, the function (as its set up in section 5 lecture 43) only works with the event and prints it to the console instead of the actual option itself
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    //.trim() is used to get rid of the spaces before and after a string, but not within the string
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//this is a class based component
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//           >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// const obj = {
//   name: "Vikram",
//   getName() {
//     return this.name;
//   }
// };

//.bind() will bind "this" to obj
// const getName = obj.getName.bind(obj);
//
// console.log(getName());
