import React from 'react';

const Input = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <label>
      Enter page URL:
      <input type="text" value={props.value} onChange={props.handleChange} />
    </label>
    <input type="submit" value="SUBMIT" />
  </form>
}

export default Input