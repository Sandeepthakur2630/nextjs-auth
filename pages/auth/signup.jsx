import { useRouter } from "next/router";

import React from "react";

export default function signup() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const router = useRouter();

  function handleClick() {
    console.log("handle click is working");
    router.push("/login");
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h1>This is the sign up page </h1>
      <div>
        <form onSubmit={handleSubmit} action="">
          <input type="email" placeholder="john@gmail.com" />
          <input type="password" placeholder="*********" />
          <button
            onClick={() => handleClick()}
            className="bg-[#f5c1f5] rounded-md p-2"
          >
            sign up
          </button>
        </form>
      </div>
    </>
  );
}
