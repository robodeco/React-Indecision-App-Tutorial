console.log("app.js is running")

// JSX – JavaScript XML
const appObj = {
  title: 'Indecision App',
  subtitle: 'An App About Completing Tasks',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const removeAll = () => {
  appObj.options = [];
  render();
}

// choose a random task from the array
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObj.options.length);
  const option = appObj.options[randomNum];
  alert(option);
};

//used to specify where we are rendering everything
const appRoot = document.getElementById('app');

const render = () => {

  const template = (
    <div>
      <h1>{appObj.title}</h1>
      {appObj.subtitle && <p>{appObj.subtitle}</p>}
      <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={appObj.options.length === 0} onClick={onMakeDecision}> What should I do? </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
      {
        appObj.options.map((option) => <li key={option}>{option}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

render();




// JUNK
// const user = {
//   name: 'Chris',
//   age: 24,
//   location: 'DC'
// }
//
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location} </p>;
//   } else {
//       return undefined;
//     }
// }
//
// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {user.age >= 18 && <p>Age: {user.age} </p>}
//     {getLocation(user.location)}
//   </div>
// );
