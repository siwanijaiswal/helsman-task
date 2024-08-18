import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Control from "../../assets/control.png";

const Navigation = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    {
      title: "Dashboard",
      src: "dashboard",
      link: "",
    },
    {
      title: "ProductList",
      src: "product-list",
      link: "/product/product-list",
    },
    {
      title: "User",
      src: "userprofile",
      link: "/product/userprofile",
    },
    {
      title: "ManageOrders",
      src: "manageOrder",
      link: "/product/manage-orders",
    },
    {
      title: "TransactionHistory",
      src: "transaction-history",
      link: "/product/transactions",
    },
    {
      title: "Report",
      src: "report",
      link: "/product/report",
    },
    {
      title: "ManageAdmin",
      src: "manageAdmin",
      link: "/product/manageAdmin",
    },

    {
      title: "DefineRoles",
      src: "defineRoles",
      link: "/product/defineRoles",
    },
    {
      title: "Master",
      src: "master",
      link: "/product/master",
    },
  ];

  return (
    <div className="flex fixed">
      <div
        className={`${
          open ? "w-[295px]" : "w-[100px]"
        } h-screen shadow-lg duration-300 shadow-cyan-500 text-black relative bg-[#F2F5F5]`}
      >
        <div className="pt-[50px] flex items-center justify-center">
          {" "}
          <img
            src={Logo}
            width="185px"
            height="30px"
            className={`${!open && "scale-0"}`}
          />
        </div>
        <img
          onClick={() => setOpen(!open)}
          src={Control}
          className={`cursor-pointer w-[33px] h-[30px] rounded-full top-9 -right-4 absolute ${
            !open && "rotate-180"
          }`}
        />
        <ul className=" flex flex-col pt-6 ml-3 mr-3 space-y-2 ">
          {menus.map((menu, index) => {
            return (
              <Link to={menu.link}>
                <li
                  key={index}
                  className="nav-button pl-8  p-2 flex gap-x-4 items-center rounded-[12px] cursor-pointer hover:bg-[#398592]"
                >
                  <img src={`./src/assets/${menu.src}.png`} width="24px" />
                  <span
                    className={`text-[#5B6C6B] font-normal text-[18px] leading-[27px] hover:text-white ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
