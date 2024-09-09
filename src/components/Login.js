import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import { auth } from "../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignInSignUp = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //sign in and sign up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute brightness-50">
        <img src={BACKGROUND_IMAGE} alt="background_image" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 my-24 p-12 absolute bg-black bg-opacity-70 mx-auto left-0 right-0 text-white"
      >
        <h1 className="font-bold text-3xl mb-10">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="relative my-4">
            <input
              ref={fullname}
              type="text"
              id="fullname"
              className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-gray-50 dark:bg-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-black peer bg-opacity-10"
              placeholder=" "
            />
            <label
              htmlFor="fullname"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Full Name
            </label>
          </div>
        )}
        <div className="relative my-4">
          <input
            ref={email}
            type="text"
            id="email_address"
            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-gray-50 dark:bg-gray-700  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-black peer bg-opacity-10"
            placeholder=" "
          />
          <label
            htmlFor="email_address"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email Address
          </label>
        </div>

        <div className="relative my-4">
          <input
            ref={password}
            type="password"
            id="password"
            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-gray-50 dark:bg-gray-700  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-black peer bg-opacity-10"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
        </div>
        <p className="text-red-500 font-bold pb-2">{errorMessage}</p>
        <button
          className="p-2 mb-5 bg-red-700 w-full rounded-lg"
          onClick={handleSignInSignUp}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer font-light text-xs"
          onClick={toggleIsSignIn}
        >
          New to Netflix? <span className="font-bold">Sign up Now</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
