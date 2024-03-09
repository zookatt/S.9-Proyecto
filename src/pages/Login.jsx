import { useContext } from "react";
import { authContext } from "../context/authContext";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

    const { updateUserLoggedIn } = useContext(authContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setAlertMessage('Invalid email address');
            setAlertType('alert-danger');
            setShowAlert(true);
            return;
        }

        if (!isLoggingIn) {
            setIsLoggingIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                updateUserLoggedIn({ name: email });
                setAlertMessage(`Welcome back to Star Wars, jedi ${email}!`);
                setAlertType('alert-success');
                setShowAlert(true);
                navigate('/starships');
            } catch (error) {
                setAlertMessage('Jedi with this email o password does not exist. Please, sign up.');
                setAlertType('alert-danger');
                setShowAlert(true);

            } finally {
                setIsLoggingIn(false);
            }
        } else {
            setAlertMessage('Jedi does not exist.');
            setAlertType('alert-danger');
            setShowAlert(true);
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };




    return (
        <div>
            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-SuperPink mb-3">Please, log in to continue</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email Address" class="w-full input input-bordered  border-SuperPink" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text ">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password"
                                className="w-full input input-bordered border-SuperPink" />
                        </div>
                        <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                        <div>
                            <button className="btn  w-full bg-SuperPink justify-center text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


{/* <div className="container text-center">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                        <form className="container">
                            <div className="card " style={{ borderRadius: "16px" }}>
                                <div className="card-header text-start">
                                    <h2><strong>Enter your email</strong></h2>
                                    <p>Log into your Star Wars account. If you don't have one, you will be prompted to create one.</p>
                                </div>
                                <div className="card-body">
                                    {showAlert && (
                                        <div className={`alert ${alertType}`} role="alert">
                                            {alertMessage}
                                        </div>
                                    )}
                                    {!showAlert && (
                                        <>
                                            <div className="form-group">
                                                <input type="email" placeholder="Email" style={{ backgroundColor: "#e9ebf0" }}
                                                    autoComplete='email'
                                                    required
                                                    value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control required"></input>
                                            </div>
                                            <div className="form-group">
                                                <label><span className="errmsg"></span></label>
                                                <input type="password" placeholder="Password" style={{ backgroundColor: "#e9ebf0" }}
                                                    autoComplete='current-password'
                                                    required
                                                    value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control"></input>
                                                <label><span className="errmsg"></span></label>
                                            </div>

                                        </>
                                    )}
                                    <div>
                                        <button type="submit"
                                            onClick={(e) => { onSubmit(e) }}
                                            className="btn btn-dark me-2">Login</button>
                                        or
                                        <Link to={'/signup'} className="btn btn-warning ms-2" >Sign Up</Link>
                                    </div>

                                </div>
                                <div className="card-footer text-start text-muted mb-2">
                                    <p className="text-sm" style={{ color: "#5f6166" }}><strong>Star Wars is part of The Walt Disney Family of Companies.</strong></p>
                                    <p className="text-sm" style={{ color: "#5f6166" }}>This email and password lets you seamlessly log into services and experiences across The Walt Disney Family of Companies, such as ESPN, Walt Disney World, Marvel, and more.</p>
                                    <p className="text-sm" style={{ color: "#5f6166" }}>If you've used your email with one of our services, please use it here too.</p>
                                    <span></span>
                                    <div className="text-center">

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}