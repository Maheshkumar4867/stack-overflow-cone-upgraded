import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import LoginOTP from './LoginOTP';

function App() {

  const [user] = useAuthState(auth);

  return (
    !user ? <LoginOTP/> : <LoginOTP/>
  );
}

export default App;