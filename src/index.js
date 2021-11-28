import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyCK8KhTKjSP-M6Fg2YMg3Hqm_EayNb2_tE",
  authDomain: "habibi-streaming.firebaseapp.com",
  projectId: "habibi-streaming",
  storageBucket: "habibi-streaming.appspot.com",
  messagingSenderId: "212948137795",
  appId: "1:212948137795:web:0d04a0f44b3368fd9d61f6",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

reportWebVitals();
