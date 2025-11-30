import React, { useEffect, useState } from "react";
import Header from "./Header";
import { checkValidEmail, checkValidPassword } from "../utils/validateForm";
import { useRef } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [signInError, setSignInError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const toggleSignUp = () => {
    setSignIn(!signIn);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("===>", email, password);
    const checkEmail = checkValidEmail(email);
    const checkPassword = checkValidPassword(password);
    if (!checkEmail.valid) {
      setEmailError(checkEmail.message);
    } else {
      setEmailError("");
    }
    if (!checkPassword.valid) {
      setPassError(checkPassword.message);
    } else {
      setPassError("");
    }

    if (emailError !== "" && passError !== "") return;

    if (signIn) {
      //login logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User logged in: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          setSignInError(error.message + " - " + error.code);
          console.error("Error logging in: ", error);
          navigate("/");
        });
    } else {
      //signup logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created: ", user);

          updateProfile(user, {
            displayName: user.displayName || "New User",
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                setUser({
                  uuid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.error("Error updating profile: ", error);
              navigate("/error");
            });
        })
        .catch((error) => {
          setRegisterError(error.message + " - " + error.code);
          console.error("Error creating user: ", error);
        });
    }
  };

  const handleInput = () => {
    console.log("Data ", emailRef.current.value, passwordRef.current.value);
  };
  useEffect(() => {}, [emailRef, passwordRef, emailError, passError, signIn]);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a92ac6d9-e542-40d5-9bb1-bb7291e4de86/web/IN-en-20251117-TRIFECTA-perspective_9fe28c81-2209-4e08-b8bd-98cfa9f97a8f_small.jpg" />
      </div>
      <div className="relative p-12 bg-black w-4/12 flex flex-col content-center mx-auto right-0 left-0 top-32 opacity-90 no-underline">
        <form className="flex flex-col items-center">
          <h1 className="text-white">{signIn ? "Sign in" : "Sign up"}</h1>
          {signIn ? null : (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 p-2 m-2 w-2/3 text-white no-underline placeholder-no-underline"
              onChange={(e) => handleInput(e)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 p-2 m-2 w-2/3 text-white no-underline"
            ref={emailRef}
            onChange={(e) => handleInput(e)}
          />
          {emailError && (
            <p className="text-red-500 text-sm w-2/3 text-left">{emailError}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 p-2 m-2 w-2/3 text-white no-underline"
            ref={passwordRef}
            onChange={(e) => handleInput(e)}
          />
          {passError && (
            <p className="text-red-500 text-sm w-2/3 text-left">{passError}</p>
          )}
          <button
            className="bg-red-500 m-2 w-2/3 text-white text-1xl underline-none"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {registerError && (
          <p className="text-red-500 text-sm w-2/3 text-left">
            {registerError}
          </p>
        )}
        {signInError && (
          <p className="text-red-500 text-sm w-2/3 text-left">{signInError}</p>
        )}
        <p className="text-white mt-4 text-sm">
          New to Netflix?{" "}
          <button className="text-blue-600" onClick={() => toggleSignUp()}>
            {signIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
        <p className="text-gray-400 text-sm mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-600"> Learn more.</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
