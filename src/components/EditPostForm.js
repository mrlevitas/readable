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
  margin-bottom:60px;
  background-color: bisque;
  opacity: .9;
  box-sizing: border-box;
`;

let validate = (formFields) => {
  const errors = {};

  if(!formFields.title) {
    errors['title'] = "Please enter a post title!";
  }

  if(!formFields.body) {
    errors['body'] = "Please enter a post body!";
  }

  if(!formFields.author) {
    errors['author'] = "Please enter your name!";
  }

  if(!formFields.category) {
    errors['category'] = "Please pick a category!";
  }

  return errors
}

let EditPostForm = props => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={ handleSubmit }>
      <div>
        <label>Title</label>
        <Field
          name="title"
          component={FieldInput}
          type="text"
          placeholder="Post Title"
        />
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
      <div>
        <label>Body</label>
        <Field
          name="body"
          component={FieldTextarea}
          placeholder="Post body here..."/>
      </div>
      <div>
        <label>Category</label>
        <div>
          <Field
            name="category"
            component={FieldSelect}
            options={["", "react", "redux", "udacity"]}
          />
      </div>
    </div>
      <button type="submit">Save Post</button>
    </Form>
  )
}

EditPostForm = reduxForm({
  form: 'editPost',
  validate
})(EditPostForm)

export default EditPostForm;
