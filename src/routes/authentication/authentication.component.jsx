import { AuthenticationContainer } from './authentication.style.jsx';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = (props) => {
  return (
    <AuthenticationContainer>
      {props.not_registered ? <SignUpForm /> : <SignInForm />}
    </AuthenticationContainer>
  );
};

export default Authentication;
