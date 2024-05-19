import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase';

function Signin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithGoogle();
      console.log('Signed in with Google:', userCredential.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
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
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
}

export default Signin;