import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/aesthetic-logo.png";
import man from "../../assets/category-assets/men-category.jpg";
import google from "../../assets/google.png";
import FormInput from "../../components/FormInputs/FormInputs";

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utls/firebase/firebase.utils";

const SignIn = () => {
  const defaultFormDetails = { email: "", password: "" };
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState(defaultFormDetails);
  const { email, password } = formDetails;
  // const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFormDetails(defaultFormDetails);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const signInWithGoogleOnClickHandler = async () => {
    await signInWithGooglePopup();
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      // setCurrentUser(user);
      resetFormFields();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");

          break;
        case "auth/user-not-found":
          alert("no user found with that email");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <section className="signIn-main-pageContainer">
      <div className="signIn-form-container">
        <Link to="/" className="text-center">
          <img src={logo} alt="log" className="w-40" />
        </Link>

        <form
          className="flex flex-col gap-3  w-full"
          onSubmit={onSubmitHandler}
        >
          <FormInput
            className="p-2 rounded-sm"
            placeholder="email"
            type="email"
            onChange={onChangeHandler}
            name="email"
            value={email}
          />
          <FormInput
            className="p-2 rounded-sm"
            placeholder="password"
            type="password"
            onChange={onChangeHandler}
            name="password"
            value={password}
          />
          <button type="submit" className="signUp-submit-btn">
            Sign In
          </button>
        </form>
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <p>or Sign in with</p>
          <button
            type="button"
            className="signIntoGoogleBtn"
            onClick={signInWithGoogleOnClickHandler}
          >
            <span>
              <img src={google} alt="google" className="w-5" />
            </span>
            Sign in with Google
          </button>
          <Link to="/" className="backToMainPageLink">
            Go back
          </Link>
        </div>
        <div className="flex gap-1">
          <p>Not Registered?</p>
          <Link to="/signUp" className="createAccount-link">
            Create an Account
          </Link>
        </div>
      </div>
      <img src={man} alt="men" className="signIn-bg-img" />
    </section>
  );
};

export default SignIn;
