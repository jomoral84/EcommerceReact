import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutLine } from "react-icons/ti";
import { toast } from "react-hot-toast";

import { useStateContext } from "../context/stateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Tu Carro</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={100} />
            <h3>Tu Carro esta vacio</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
            
                Continuar Comprando
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
