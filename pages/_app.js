import "../styles/globals.css";
import AuthContext from "./context/auth";
import { useState, createContext } from "react";

function MyApp({ Component, pageProps }) {
  const [signIn, setSignin] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ signIn, setSignin }}>
        <Component {...pageProps} />;
      </AuthContext.Provider>
    </>
  );
}

export default MyApp;
