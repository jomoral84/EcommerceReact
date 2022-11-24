import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
          <p className="logo">
            <Link href="/"> Shopping Online</Link>
          </p>
          <button type="button" className="cart-icon">

          </button>
    </div>
  )
};

export default Navbar;
