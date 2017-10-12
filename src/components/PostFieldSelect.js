import React from 'react';

const PostFieldSelect = ({ input, label, placeholder, meta: { touched, error }, options, id }) => {
  return (
    <div className="field-row">
      <div>
        <label htmlFor={id}>{label}</label>
        {touched && error && <span style={{color: 'red'}}>{error}</span>}
      </div>
      <div>
        <select {...input} id={id}>
          {options.map((oStr) => (
            <option value={oStr}>{oStr}</option>
          ))}
        </select>
      </div>
    </div>
  );
}


export default PostFieldSelect;
