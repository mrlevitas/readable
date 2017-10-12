import React from 'react';

const PostFieldTextarea = ({ input, label, placeholder, meta: { touched, error }, type, id }) => {
  return (
    <div className="field-row">
      <div>
        <label htmlFor={id}>{label}</label>
        {touched && error && <span style={{color: 'red'}}>{error}</span>}
      </div>
      <div>
        <textarea {...input} id={id} placeholder={placeholder}/>
      </div>
    </div>
  );
}


export default PostFieldTextarea;
