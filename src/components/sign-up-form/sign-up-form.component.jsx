import { useContext, useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils.js";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.style.scss";
import { UserContext } from "../context/user.context.jsx";
const SignUpForm = (props) => {
  const defaultformFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //set form fields
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handeSubmit = async (event) => {
    event.preventDefault();

    //check if passwords match
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    // addiditional checks: password length, diversity, to build a robust password

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
    } catch (error) {
      console.log("user creation error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> Dont' have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handeSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            onChange: handleChange,
            name: "displayName",
            value: displayName,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
            required: true,
          }}
        />

        <Button>Sign Up</Button>

        <div className="need-to-sign-in">
          <p>Do you have an account?</p>
          <Link className="nav-link" to="/auth">
            <b> Sign in! </b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
