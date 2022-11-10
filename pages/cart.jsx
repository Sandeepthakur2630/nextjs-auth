import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";

const cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="px-[15% cart] grid grid-cols-3 pt-8">
        {state.map((item, index) => {
          return (
            <div key={index}>
              <div className="w-24 pt-7">
                <img src={item.image} alt="" />
              </div>
              <p>{item.title}</p>
              <p> {`Price:$ ${item.price * item.quantity} `}</p>

              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
                className="bg-[#f5d7d7] p-2 rounded-md"
              >
                +
              </button>
              {item.quantity}
              <button
                onClick={() => dispatch({ type: "DECREASE", payload: item })}
                className="bg-[#f5d7d7] p-2 rounded-md"
              >
                -
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {state.length > 0 && (
          <div>
            <h1 className="font-bold ">The total is {total} </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default cart;
