import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserProvider from "./UserContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
import { GoogleOAuthProvider } from '@react-oauth/google';
root.render(
  <GoogleOAuthProvider clientId="404823727594-1r97duv417cgnhd5hs6g37i3s97s0bau.apps.googleusercontent.com">
  <React.StrictMode>
         <UserProvider>
        <App />
      </UserProvider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
