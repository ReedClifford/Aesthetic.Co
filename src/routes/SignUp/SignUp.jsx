import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/aesthetic-logo.png";
import signupBg from "../../assets/category-assets/jackets-category.jpg";
import FormInput from "../../components/FormInputs/FormInputs";

import {
  createAuthUserWithEmailAndPassword,
  createUserRefDocAuth,
} from "../../utls/firebase/firebase.utils";

const SignUp = () => {
  const navigate = useNavigate();
  const defaultFormDetails = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  // const { setCurrentUser } = useContext(UserContext);

  const [formDetails, setFormDetails] = useState(defaultFormDetails);
  const { displayName, email, password, confirmPassword } = formDetails;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const resetFormFields = () => {
    setFormDetails(defaultFormDetails);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("invalid password");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      await createUserRefDocAuth(user, { displayName });

      alert("Sign Up Success");
      resetFormFields();
      navigate("/signIn");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user,email already in use");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <section className="signIn-main-pageContainer">
      <div className="signUp-form-container">
        <div className="flex flex-col justify-center items-center gap-5">
          <Link to="/" className="text-center">
            <img src={logo} alt="log" className="w-40" />
          </Link>
          <h1>Sign Up with your email and password</h1>
        </div>

        <div className="w-full">
          <form
            className="flex flex-col gap-3  w-full"
            onSubmit={onSubmitHandler}
          >
            <FormInput
              className="p-2 rounded-sm"
              type="text"
              placeholder="Display Name"
              required
              value={displayName}
              name="displayName"
              onChange={onChangeHandler}
            />
            <FormInput
              className="p-2 rounded-sm"
              type="email"
              placeholder="Email"
              required
              value={email}
              name="email"
              onChange={onChangeHandler}
            />
            <FormInput
              className="p-2 rounded-sm"
              type="password"
              placeholder="Password"
              required
              value={password}
              name="password"
              onChange={onChangeHandler}
            />
            <FormInput
              className="p-2 rounded-sm"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              name="confirmPassword"
              onChange={onChangeHandler}
            />
            <button type="submit" className="signUp-submit-btn">
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <Link to="/signIn" className="backToMainPageLink">
            Go back
          </Link>
        </div>
      </div>
      <img src={signupBg} alt="men" className="signIn-bg-img" />
    </section>
  );
};

export default SignUp;
