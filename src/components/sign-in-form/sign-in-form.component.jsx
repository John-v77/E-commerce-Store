import { useDispatch } from 'react-redux';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ButtonsContainer,
  NeedToSignUp,
  SignInContainer,
} from './sign-in-form.style.jsx';
import { googleSignInStart } from '../../store/user/user.actions';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInForm(props) {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async (event) => {
    dispatch(googleSignInStart());
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
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </ButtonsContainer>
        <NeedToSignUp>
          <p>Don't have an account?</p>
          <Link className='nav-link' to='/register'>
            <b> Sign up! </b>
          </Link>
        </NeedToSignUp>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
