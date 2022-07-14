import "./authentication.style.scss";
import SignUpForm from "../../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../../components/sign-in-form/sign-in-form.component";

const Authentication = (props) => {
  console.log(props.not_registered);
  return (
    <div className="authentication-container">
      {props.not_registered ? <SignUpForm /> : <SignInForm />}
    </div>
  );
};

export default Authentication;
