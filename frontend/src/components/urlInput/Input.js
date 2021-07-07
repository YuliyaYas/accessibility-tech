import React from 'react';
import './input.scss';
const Input = (props) => {
    return <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleChange} placeholder="Enter your page URL"/>
      <button> GET REPORT </button>
  </form>
}

export default Input