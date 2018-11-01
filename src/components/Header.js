import React from 'react';

const Header = (props) => (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>
  );

//a placeholder for the 'title' prop on Header for when no prop is passed down
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;


// IndecisionApp.defaultProps = {
//   options: []
// }
