import { useState } from "react";
import movie_bg from "../assets/images/movie_bg.jpg";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <div className="relative py-24">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <img
          className="w-full h-full object-cover"
          src={movie_bg}
          alt="movie_bg"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="z-10 relative text-white">
        <div className="w-5/12 mt-6 mx-auto rounded-2xl bg-black/50 p-[80px]">
          <h1 className="font-bold text-2xl mb-5">{isSignIn ? "Sign In": "Sign Up"}</h1>
          <form action="">
            {!isSignIn && <input
              className="h-12 p-4 bg-black/60 w-full border border-white rounded-[5px] mb-4"
              type="text"
              name="name"
              placeholder="Name"
            />}
            <input
              className="h-12 p-4 bg-black/60 w-full border border-white rounded-[5px] mb-4"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="h-12 p-4 bg-black/60 w-full border border-white rounded-[5px] mb-4"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="bg-red-600 text-white w-full rounded-[5px] px-4 py-2">
              Sign In
            </button>
            <p onClick={toggleForm} className="text-sm mt-5 cursor-pointer">
              {isSignIn ? (
                <>
                  <span className="text-gray-400">Already registered.</span>{" "}
                  Click to Sign in now
                </>
              ) : (
                <>
                  <span className="text-gray-400">New to Netflix?</span> Sign up
                  Now
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
