import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import movie_bg from "../assets/images/movie_bg.jpg";
import { auth } from "./../../firebase";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleForm = () => setIsSignIn(!isSignIn);

  const onSubmit = async ({ email, password, name }) => {
    setIsLoading(true);
    if (isSignIn) {
      try {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/browse");  
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setApiError(errorCode + " - " + errorMessage);
        setIsLoading(false);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        // Update user's display name
        await updateProfile(user, {
          displayName: name,
        });

        // console.log('app', auth.currentUser.email)
        // const { uid, displayName = name, email } = auth.currentUser;
        dispatch(setUser({ uid: auth?.currentUser?.uid, displayName: name, email: auth?.currentUser?.email }));

        navigate("/browse");

        console.log("User signed up:", user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setApiError(errorCode + " - " + errorMessage);
        setIsLoading(false);
      }
    }
  };

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
          <h1 className="font-bold text-2xl mb-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {!isSignIn && (
              <input
                className="h-12 p-4 bg-black/60 w-full border border-white rounded-[5px] mb-4"
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
            )}
            {errors.name && (
              <p className="text-red-500 mb-2 text-[14px]">
                {errors.name.message}
              </p>
            )}
            <input
              className="h-12 p-4 bg-black/60 w-full border border-white rounded-[5px] mb-4"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 mb-2 text-[14px]">
                {errors.email.message}
              </p>
            )}
            <input
              className="h-12 p-4 bg-black/60 w-full border border-white rounded-[5px] mb-4"
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 mb-2 text-[14px]">
                {errors.password.message}
              </p>
            )}

            {apiError && (
              <p className="text-red-500 mb-2 text-[14px]">{apiError}</p>
            )}

            <button
              className={`bg-red-600 text-white w-full rounded-[5px] px-4 py-2 cursor-pointer ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'wait...' : isSignIn ? "Sign In" : "Sign Up" }
            </button>
            <p onClick={toggleForm} className="text-sm mt-5 cursor-pointer">
              {!isSignIn ? (
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
