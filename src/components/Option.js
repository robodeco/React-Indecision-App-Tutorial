import React from 'react';

const Option = (props) => (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button
        className="button button--link"
        onClick={(e) => {
          //without passing the correct information through the handleDeleteOption function as shown below, the function (as its set up in section 5 lecture 43) only works with the event and prints it to the console instead of the actual option itself
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
);

export default Option;
