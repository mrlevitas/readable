import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';

import PostFieldInput from './PostFieldInput';
import PostFieldTextarea from './PostFieldTextarea'
import PostFieldSelect from './PostFieldSelect'

const Form = styled.form`
  width: 350px;
  display: inline-block;
  padding-right:60px;
  padding-left:60px;
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

  if(!formFields.category) {
    errors['category'] = "Please pick a category!";
  }

  return errors
}

let PostForm = props => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={ handleSubmit }>
      <div>
        <label>Title</label>
        <Field
          name="title"
          component={PostFieldInput}
          type="text"
          placeholder="Post Title"
        />
      </div>
      <div>
        <label>Body</label>
        <Field
          name="body"
          component={PostFieldTextarea}
          placeholder="Post body here..."/>
      </div>
      <div>
        <label>Category</label>
        <div>
          <Field
            name="category"
            component={PostFieldSelect}
            options={["", "react", "redux", "udacity"]}
          />
      </div>
    </div>
      <button type="submit">Add Post</button>
    </Form>
  )
}

PostForm = reduxForm({
  form: 'post',
  validate
})(PostForm)

export default PostForm;
