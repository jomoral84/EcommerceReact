import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "../context/stateContext";
import { runFireworks } from "../lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Gracias por tu Compra!</h2>
        <p>Revisa tu correo para mas informacion</p>
        <p className="description">
          Si tenes una pregunta, enviar mail a{" "}
          <a className="email" href="mailto:pepe@gmail.com">
            pepe@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default success;
