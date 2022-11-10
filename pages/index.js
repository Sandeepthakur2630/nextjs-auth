import { useState, useContext, useEffect } from "react";
import Link from "next/link";
// import { CartContext } from "./context/Context";
import AuthContext from "./context/auth";

import axios from "axios";
import { useRouter } from "next/router";

function home() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const { signIn } = useContext(AuthContext);

  console.log("this is from index ", signIn);

  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   const userCreated = localStorage.getItem("userTrue");
  //   console.log(userCreated);
  // }

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (signIn === true) {
      router.push("/");
      return;
    }
    if (signIn === false) {
      router.push("/login");
    }
    // if (signIn === false) {
    //   router.push("/login");
    // }
    // if (localStorage.getItem(signIn) === "false") router.push("/login");
  }, []);

  // useEffect(() => {
  //   if (signIn === true) {
  //     router.push("/");
  //     return;
  //   }
  // });

  // useEffect(() => {
  //   const hello = localStorage.setItem("newUser", "yes");
  // }, [signIn]);

  // const GlobelState = useContext(CartContext);
  // const dispatch = GlobelState.dispatch;
  // console.log(GlobelState);
  function handleLogout() {
    // localStorage.setItem("localSignIn",JSON.stringify(signIn));
    router.push("/auth/signup");
  }
  return (
    <>
      <button onClick={handleLogout} className="bg-[#f2d3f2] p-2 rounded-md">
        logout
      </button>
      <div className="px-[15%] grid grid-cols-3 bg-[ghostwhite]">
        {data.map((item) => {
          item.quantity = 1;
          return (
            <>
              <div className="mt-[5rem] grid grid-cols-3 " key={item.id}>
                <div>
                  <div className="w-24">
                    <Link href={`/products/${item.id}`}>
                      <img
                        src={item.image}
                        alt=""
                        onClick={() =>
                          dispatch({ type: "SINGLEADD", payload: item })
                        }
                      />
                    </Link>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <p>{`Price:$ ${item.price}`}</p>
                    <p>{item.catagory}</p>

                    <button
                      onClick={() => dispatch({ type: "ADD", payload: item })}
                      className="bg-[#eee6e6] rounded-md p-1"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default home;
