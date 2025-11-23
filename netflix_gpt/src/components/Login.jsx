import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignUp = () => {
    setSignIn(!signIn);
  };
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
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 p-2 m-2 w-2/3 text-white no-underline"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 p-2 m-2 w-2/3 text-white no-underline"
          />
          <button
            className="bg-red-500 m-2 w-2/3 text-white text-1xl underline-none"
            type="submit"
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
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
