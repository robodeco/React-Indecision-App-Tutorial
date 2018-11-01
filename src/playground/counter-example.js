class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const count = JSON.parseInt(json, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count: count }));
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  //fires after a component updates; when a state or prop value changes. also has access to previous values of state and props
  // if the length of the previous options state array is dissimilar to the length of the current options state array, then set the current array to localStorage as JSON
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count {
      localStorage.setItem('count', this.state.count)
      console.log('saving data');
    }
  }
  //fires before component goes away
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // Counter.defaultProps = {
  //   count: 0
  // }

//prevState below is accessing the current state of 'count'
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
//this.setState calls are asynchronous, meaning if we were to make two setState calls they would fire off independently of each other, potentially/probably resulting in something vastly different than the intended solution.
//"this.setState({count: this.state.count +1})", the previous way we were learning to do this, is now considered outdated. It is much more preferred that we return an object. returning this object will not overwrite the entire state object, only the method it is directly referring to.
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log('addOne', count);
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log('minusOne');
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log('reset');
// }
//
//
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();
