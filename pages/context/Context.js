import { createContext } from "react";
import { useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter((item) => action.payload.id === item.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "SINGLEADD":
        const tempstate3 = state.filter(
          (item) => action.payload.id === item.id
        );
        if (tempstate3.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case "INCREASE":
        const tempstate1 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          } 
        });
        return tempstate1;
      case "DECREASE":
        const tempstate2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  console.log(state);

  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};
