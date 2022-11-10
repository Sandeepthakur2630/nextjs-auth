import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "./context/auth";

export default function login() {
  // const [signIn, setSignIn] = useState(false);

  // const { signIn, setSignin } = useContext(AuthContext);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const { signIn, setSignin } = useContext(AuthContext);
  const router = useRouter();

  // function handleClick() {
  //   router.push("/");

  function handleSubmit(e) {
    e.preventDefault();
    setSignin(true);
    const signInlocal = localStorage.setItem("userTrue", signIn);
    console.log("this is for local log", signIn);

    // localStorage.setItem("userCreated", "yes");
    // localStorage.setItem("localSignIn", JSON.stringify(signIn));
    if (signIn === false) return;
    if (signIn === true) {
    }
    router.push("/");
    // console.log("this is from login button ", signIn);
  }

  return (
    <>
      <h1>This is the login page </h1>
      <div>
        <form onSubmit={handleSubmit} action="">
          <input type="email" placeholder="john@gmail.com" />
          <input type="password" placeholder="*********" />
          <button className="bg-[#f5c1f5] rounded-md p-2">login</button>
        </form>
      </div>
    </>
  );
}
