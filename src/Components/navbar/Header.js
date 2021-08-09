import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/DIGIT.png";
import "../../App.css";
import MenuData from "./MenuItem";
import SearchIcon from "../../assets/img/search.png";
import Container from "../common/Container";

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [active, setActive] = useState(null);
  return (
    <nav className="relative flex flex-wrap navbar_shadow bg-white items-center justify-between px-4 py-4">
    <Container>
      <div className="lg:flex items-center justify-between block">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="text-gray-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex items-center justify-between" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none">
            {MenuData.map((data) => {
              return (
                <li className="nav-item 2xl:px-4 px-1" key={data.id} onClick={()=>setActive(data.id)}>
                  <Link
                    className={`px-2 xl:px-5 py-2 text-nav flex items-center text-lg capitalize font-normal leading-snug hover:opacity-75 ${active === data.id && "border-b-2 border-border"}`}
                    to={data.link}
                  >
                    {data.item}
                  </Link>
                </li>
              );
            })}
            
         <form className="pl-1 lg:pl-5">
            <div className="relative text-gray-600 focus-within:text-gray-400 border border-border_color">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <img src={SearchIcon} alt="search" />
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 text-sm text-theme_color rounded-md pl-10 focus:outline-none focus:bg-white placeholder-placeholder_color"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </form>
          </ul>
         </div>
        </div>
        </Container>
    </nav>
  );
}
