import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    // Send email verification after user creation
    await sendVerificationEmail(userCredential.user);

    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};

const sendVerificationEmail = async (user) => {
  try {
    await sendEmailVerification(user);
    console.log("Email verification sent!");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
