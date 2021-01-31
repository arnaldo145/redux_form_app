import React from 'react';
import { Field, reduxForm } from 'redux-form';

const InitForm = props => {
  return(
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" placeholder="Enter your name" type="text" component="input"/>
        </div>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'initForm'
})(InitForm);
