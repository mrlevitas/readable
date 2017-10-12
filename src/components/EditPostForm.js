import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';

import PostFieldInput from './PostFieldInput';
import PostFieldTextarea from './PostFieldTextarea'
import PostFieldSelect from './PostFieldSelect'

const Form = styled.form`

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
          component={PostFieldInput}
          type="text"
          placeholder="Post Title"
        />
      </div>
      <div>
        <label>Author</label>
        <Field
          name="author"
          component={PostFieldInput}
          type="text"
          placeholder="Your name here"
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

EditPostForm = reduxForm({
  form: 'editPost',
  validate
})(EditPostForm)

export default EditPostForm;
