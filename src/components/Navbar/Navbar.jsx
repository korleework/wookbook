// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import OrderPage from "../Order/OrderPage"; // Import OrderPage

const Menu = [
  {
    id: 1,
    name: "홈",
    link: "/#",
  },
  {
    id: 2,
    name: "대해서",
    link: "/#about",
  },
  {
    id: 3,
    name: "메뉴",
    link: "/#menu",
  },
  {
    id: 4,
    name: "서비스",
    link: "/#services",
  },
];

const Navbar = () => {
  const [showOrderPage, setShowOrderPage] = useState(false);

  const toggleOrderPage = () => {
    setShowOrderPage(!showOrderPage);
  };

  return (
    <>
      <div className="shadow-xl" style={{backgroundColor: "#48D1CC"}}>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-16" />
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-300"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                onClick={toggleOrderPage}
              >
                주문
              </button>
            </div>
          </div>
        </div>
      </div>
      {showOrderPage && <OrderPage />} {/* Conditionally render OrderPage */}
    </>
  );
};

export default Navbar;
