import React from 'react';

//this is a statless functional component. it does not need "this" and operates separately from state.
const Action = (props) => (
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do?
      </button>
    </div>
);

export default Action;
