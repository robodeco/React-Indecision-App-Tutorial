//from sect. 4 ep 35
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      toggle: false
    };
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          { this.state.toggle === false ? "Show Details" : "Hide Details" }
        </button>
        <p>{ this.state.toggle === true ? "Here are some details!" : "" }</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//my solution from first activity
// const appRoot = document.getElementById('app');
//
// let toggled = false;
//
// const toggle = () => {
//   toggled = !toggled
//   render();
// };
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>
//         { toggled === false ? "Show Details" : "Hide Details" }
//       </button>
//       <p>{ toggled === true ? "Here are some details!" : "" }</p>
//     </div>
//   )
//
//   ReactDOM.render(template, appRoot);
// }
//
// render();

// solution from the activity

// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// }
//
// // const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//
//     <button onClick={toggleVisibility}>
//       {visibility ? 'Hide Details' : 'Show Details'}
//     </button>
        // {visibility && (
        //   <div>
        //     <p> Hey. These are some details you can now see. </p>
        //   <div>
        // )}
//     </div>
//   );
//
//   ReactDOM.render(jsx, document.getElementById('app'));
// };
//
// render()
