import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './sign-in-form.style.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInForm(props) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async (event) => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      if (
        error.code === 'auth/wrong password' ||
        error.code === 'auth/user-not-found'
      )
        alert('incorrect email or password');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            onChange: handleChange,
            name: 'email',
            value: email,
            required: true,
          }}
        />

        <FormInput
          label='password'
          inputOptions={{
            type: 'password',
            onChange: handleChange,
            name: 'password',
            value: password,
            required: true,
          }}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </div>
        <div className='need-to-sign-up'>
          <p>Don't have an account?</p>
          <Link className='nav-link' to='/register'>
            <b> Sign up! </b>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
