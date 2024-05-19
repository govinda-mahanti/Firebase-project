// Signup.jsx
import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    try {
      const result = await signInWithGoogle();
      console.log('Signed up with Google:', result);

      // Check if the user is new
      if (result && result.additionalUserInfo) {
        if (result.additionalUserInfo.isNewUser) {
          toast.success("Welcome! Your account has been created.");
        } else {
          toast.info("Welcome back!");
        }
      } else {
        throw new Error('No additionalUserInfo in the result');
      }
    } catch (error) {
      toast.error("Failed to sign up");
      console.error('Error signing up with Google:', error);
    }
  };

  return (
    <div className="app">
      {user ? (
        <>
          <h1>Hello, {user.displayName}</h1>
          <button onClick={() => auth.signOut()}>Log out</button>
        </>
      ) : (
        <>
          <button onClick={handleSignUp}>Sign up with Google</button>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Signup;
