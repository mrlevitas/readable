import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';

import FieldInput from './FieldInput';
import FieldTextarea from './FieldTextarea'
import FieldSelect from './FieldSelect'

const Form = styled.form`
  width: 350px;
  display: inline-block;
  padding-right:60px;
  padding-left:60px;
  background-color: teal;
  opacity: .9;
  box-sizing: border-box;
`;

let validate = (formFields) => {
  const errors = {};

  if(!formFields.body) {
    errors['body'] = "Please enter a post body!";
  }

  if(!formFields.author) {
    errors['author'] = "Please enter your name!";
  }

  return errors
}

let CommentForm = props => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Comment</label>
        <Field
          name="body"
          component={FieldTextarea}
          placeholder="Comment body here..."/>
      </div>
      <div>
        <label>Author</label>
        <Field
          name="author"
          component={FieldInput}
          type="text"
          placeholder="Your name here"
        />
      </div>
      <button type="submit">Add Comment</button>
    </Form>
  )
}

CommentForm = reduxForm({
  form: 'comment',
  validate
})(CommentForm)

export default CommentForm;
