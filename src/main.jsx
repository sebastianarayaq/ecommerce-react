import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtQcLTPlmkaMazIx81l_OyiJSYLhYwTR4",
  authDomain: "shop-react-bd2b1.firebaseapp.com",
  projectId: "shop-react-bd2b1",
  storageBucket: "shop-react-bd2b1.appspot.com",
  messagingSenderId: "114225594648",
  appId: "1:114225594648:web:bedccc3b72618a05e0de6d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col min-h-screen justify-between'>
      <App />
    </div>
  </React.StrictMode>,
)
