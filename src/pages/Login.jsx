//import { db, auth } from "../firebase/firebase"
import { useContext } from "react";
import { authContext } from "../context/authContext";

import { doSignInWithEmailAndPassword } from "../firebase/auth";
//import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { updateUserLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setAlertMessage("Invalid email address");
      setAlertType("alert-danger");
      setShowAlert(true);
      return;
    }

    if (!isLoggingIn) {
      setIsLoggingIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        updateUserLoggedIn({ name, email, password });
        // const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // const user = userCredential.user;

        // // Retrieve user's name from Firestore
        // const userDoc = await getDoc(doc(db, "users", user.uid));
        // const userData = userDoc.data();

        // if (userData) {
        //     const userName = userData.name;
        //     // Update user context with name
        //     updateUserLoggedIn({ name: userName, email: email, password: password });
        // }
        setAlertMessage(`Welcome back to Torino Print, ${email}!`);
        setAlertType(
          "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",
        );
        setShowAlert(true);
        navigate("/design");
      } catch (error) {
        setAlertMessage(
          "User with this email o password does not exist. Please, sign up.",
        );
        setAlertType(
          "border border-t-4 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700",
        );
        setShowAlert(true);
      } finally {
        setIsLoggingIn(false);
      }
    } else {
      setAlertMessage("User does not exist.");
      setAlertType("alert-danger");
      setShowAlert(true);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div>
      <form className="container sm:w-1/2 mx-auto justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Log in to your account
            </h2>
          </div>
          <div className="sm:w-1/2 mx-auto justify-center mt-4 mb-4">
            {showAlert && (
              <div className={`mb-3 alert ${alertType}`} role="alert">
                {alertMessage}
              </div>
            )}
            {!showAlert && (
              <>
                {/* <div className="mb-4">
                                    <p className="text-gray-700 text-start mb-2">Your name</p>

                                    <input type="name" placeholder="name" className="bg-gray-200 px-4 py-2 rounded-md w-full" autoComplete="name" required value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div> */}
                <div className="mb-4">
                  <p className="text-gray-700 text-start mb-2">Your email</p>

                  <input
                    type="email"
                    placeholder="your@mail.com"
                    className="bg-gray-200 px-4 py-2 rounded-md w-full"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <p className="text-gray-700 text-start mb-2">Password</p>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••"
                    className="bg-gray-200 px-4 py-2 rounded-md w-full"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </>
            )}
            <div className=" mx-auto text-center mt-3">
              <button
                type="submit"
                onClick={(e) => {
                  onSubmit(e);
                }}
                className="bg-DarkBlue text-white px-4 py-2 rounded-md w-full mt-3 mb-3"
              >
                Login
              </button>

              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-SuperPink text-bold  hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
