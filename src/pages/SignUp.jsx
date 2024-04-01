import { useState, useContext } from "react";
import { authContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

export const SignUp = () => {
    const { updateUserLoggedIn } = useContext(authContext);
    const navigateTo = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [isRegistering, setIsRegistering] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setAlertMessage('Please fill out all fields.');
            setAlertType('border border-t-4 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700');
            setShowAlert(true);
            return;
        }

        setIsRegistering(true);
        try {
            await doCreateUserWithEmailAndPassword(email, password);
            updateUserLoggedIn({ name, email, password });
            setAlertMessage(`A verification link has been sent to ${email}. Please check your mailbox and follow the instructions to complete registration.`);
            setAlertType('bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md');
            setShowAlert(true);
            //navigateTo('/user');
        } catch (error) {
            setAlertMessage('User with this email already exists. Please try again.');
            setAlertType('bg-orange-100 border-t-4 border-orange-500 text-orange-700 p-4');
            setShowAlert(true);
        } finally {
            setIsRegistering(false);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameValid(e.target.value.trim() !== '');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordValid(e.target.value.trim() !== '');
    };

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div>
            <div className="container sm:w-1/2 mx-auto justify-center">
                <div className="lg:offset-3 lg:col-6">
                    <form className="container">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="text-gray-800 py-4 px-6">
                                <h2 className="text-3xl font-bold text-center">Create new account</h2>
                            </div>
                            <div className="sm:w-1/2 mx-auto justify-center mt-4 mb-4">
                                {showAlert && (
                                    <div className={`alert ${alertType}`} role="alert">
                                        {alertMessage}
                                    </div>
                                )}
                                <div className="lg:col-12">
                                    <div className="mb-4">
                                        <p className="text-gray-700 text-start mb-2">Your name</p>
                                        <input type="text" placeholder="name" id="grid-first-name" className={`bg-gray-200 px-4 py-2 rounded-md w-full ${!nameValid && 'outline-red'}`} autoComplete="name" required value={name} onChange={handleNameChange} />
                                        {!nameValid && <small className="text-red-500">Please enter your name.</small>}
                                    </div>
                                </div>
                                <div className="lg:col-12">
                                    <div className="mb-4">
                                        <p className="text-gray-700 text-start mb-2">Your email</p>
                                        <input type="email" placeholder="your@mail.com" className={`bg-gray-200 px-4 py-2 rounded-md w-full ${!emailValid && 'outline-red'}`} autoComplete="email" required value={email} onChange={handleEmailChange} />
                                        {!emailValid && <small className="text-red-500">Invalid email address.</small>}
                                    </div>
                                </div>
                                <div className="lg:col-12">
                                    <div className="mb-4">
                                        <p className="text-gray-700 text-start mb-2">Password</p>
                                        <input disabled={isRegistering} type="password" name="password" id="password" placeholder="••••••" className={`bg-gray-200 px-4 py-2 rounded-md w-full ${!passwordValid && 'outline-red'}`} autoComplete="new-password" required value={password} onChange={handlePasswordChange} />
                                        {!passwordValid && <small className="text-red-500">Please enter a password.</small>}
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-start justify-center sm:w-1/2 w-full mx-auto">


                                <div class="flex items-start">
                                    <div class="flex items-start h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm mb-4">
                                        <label for="terms" class="font-light text-primary-600 dark:text-gray-300">I accept the <a class="font-medium text-bold text-DarkBlue hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>


                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm mb-4">
                                        <label for="terms" class="font-light text-primary-600 dark:text-gray-300">I agree to receive news, promotions and emails from Torino Print.</label>
                                    </div>
                                </div>

                                <button onClick={onSubmit} type="submit" disabled={isRegistering} className="bg-SuperPink text-white px-4 py-2 rounded-md w-full">Create an account</button>

                                <p className="text-sm text-center mt-3 font-light text-gray-500">
                                    Already have an account? <Link to={'/login'} className="font-medium text-DarkBlue hover:underline">Login here</Link>
                                </p>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


