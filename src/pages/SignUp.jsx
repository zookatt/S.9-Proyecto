import { doCreateUserWithEmailAndPassword } from "../firebase/auth"
import { useState, useContext } from "react";
import { authContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
    const { updateUserLoggedIn } = useContext(authContext);
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
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

        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                updateUserLoggedIn({ name: email });
                setAlertMessage('Welcome to Torino Print!');
                setAlertType('alert-success');
                setShowAlert(true);
                navigate('/user');
            } catch (error) {
                setAlertMessage('User with this email has already exists. Please, try again.');
                setAlertType('alert-warning');
                setShowAlert(true);

            } finally {
                setIsRegistering(false);
            }
        }
    };

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    return (
        <div>
            {/* <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-SuperPink mb-3">Sign up form</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" class="w-full input input-bordered  border-SuperPink" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email Address" class="w-full input input-bordered  border-SuperPink" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text ">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password"
                                className="w-full input input-bordered border-SuperPink" />
                        </div>
                        <div>
                            <button className="btn  w-full bg-SuperPink justify-center text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div> */}

            <div className="container sm:w-1/2 mx-auto  justify-center">
                <div className="lg:offset-3 lg:col-6">
                    <form className="container">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="text-gray-800 py-4 px-6">
                                <h2 className="text-3xl font-bold  text-center">Create new account</h2>
                            </div>
                            <div className="sm:w-1/2 mx-auto justify-center mt-4 mb-4">
                                {showAlert && (
                                    <div className={`alert ${alertType}`} role="alert">
                                        {alertMessage}
                                    </div>
                                )}
                                {!showAlert && (
                                    <>
                                        <div className="lg:col-12">
                                            <div className="mb-4">
                                                <p className="text-gray-700 text-start mb-2">Your name</p>
                                                <input type="text" placeholder="name" className="bg-gray-200 px-4 py-2 rounded-md w-full" autoComplete="name" required value={name} onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="lg:col-12">
                                            <div className="mb-4">
                                                <p className="text-gray-700 text-start mb-2">Your email</p>
                                                <input type="email" placeholder="your@mail.com" className="bg-gray-200 px-4 py-2 rounded-md w-full" autoComplete="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="lg:col-12">
                                            <div className="mb-4">
                                                <p className="text-gray-700 text-start mb-2">Password</p>
                                                <input disabled={isRegistering} type="password" name="password" id="password" placeholder="••••••" className="bg-gray-200 px-4 py-2 rounded-md w-full" autoComplete="new-password" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm mb-4">
                                                <label for="terms" class="font-light text-primary-600 dark:text-gray-300">I accept the <a class="font-medium text-bold text-DarkBlue hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <button onClick={onSubmit} type="submit" disabled={isRegistering} className="bg-SuperPink text-white px-4 py-2 rounded-md  w-full">Create an account</button>
                                <p class="text-sm text-start mt-3 font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={'/login'} className="font-medium text-DarkBlue hover:underline dark:text-primary-500 mb-3">Login here</Link>
                                </p>




                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

{/* <div>
            <div className="container text-center">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" >
                        <div className="card">
                            <div className="card-header">
                                <h1>User Registration</h1>
                            </div>
                            <div className="card-body text-center">
                                {showAlert && (
                                    <div className={`alert ${alertType}`} role="alert">
                                        {alertMessage}
                                    </div>
                                )}
                                {!showAlert && (
                                    <>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label> <span className="errmsg"></span></label>
                                                <input type="text" placeholder="Name" style={{ backgroundColor: "#e9ebf0" }}
                                                    autoComplete='name'
                                                    required
                                                    value={name} onChange={(e) => { setName(e.target.value) }} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label><span className="errmsg"></span></label>
                                                <input type="email" placeholder="Email" style={{ backgroundColor: "#e9ebf0" }}
                                                    autoComplete='email'
                                                    required
                                                    value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label><span className="errmsg"></span></label>
                                                <input disabled={isRegistering}
                                                    type="password" placeholder="Password" style={{ backgroundColor: "#e9ebf0" }}
                                                    autoComplete='new-password'
                                                    required
                                                    value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control"></input>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="mb-2">
                                <button onClick={onSubmit} type="submit"
                                    disabled={isRegistering} className="btn btn-dark me-1"> Sign Up</button> or
                                <Link to={'/login'} className="btn btn-warning ms-2" >Log In</Link>
                            </div>
                            <div className="card-footer text-start text-muted mb-2">
                                <p className="text-sm" style={{ color: "#5f6166" }}><strong>Star Wars is part of The Walt Disney Family of Companies.</strong></p>
                                <p className="text-sm" style={{ color: "#5f6166" }}>This email and password lets you seamlessly log into services and experiences across The Walt Disney Family of Companies, such as ESPN, Walt Disney World, Marvel, and more.</p>
                                <p className="text-sm" style={{ color: "#5f6166" }}>If you've used your email with one of our services, please use it here too.</p>
                                <span></span>
                                <div className="text-center">
                                    <img src={smallIcons} alt="smallIcons" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> */}