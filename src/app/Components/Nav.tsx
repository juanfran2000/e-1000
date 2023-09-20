"use client";
import { useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-red-600 h-[75px] flex items-center justify-center sm:justify-around md:justify-between md:pl-[60px] md:pr-[60px] relative">
        <Image
          className="w-8 h-8 absolute left-4 sm:hidden cursor-pointer"
          src="/menu-hamburguesa/menu.svg"
          alt="menu"
          width={100}
          height={100}
          onClick={toggleMenu}
        />
        <div>
          <a href="/">
            <Image
              className="w-12 sm:w-16"
              src="/logo/mcdonald.png"
              alt="logo"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="hidden sm:block">
          <ul className="text-white space-x-3 sm:space-x-8 flex items-center">
            <li>
              <a href="#section-infoCard">Hamburger</a>
            </li>
            <li>
              <a href="#section-descubre">Descubre</a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=es" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sm:block ${
          isMenuOpen ? "block" : "hidden"
        } bg-white h-screen sm:h-0`}
      >
        <ul className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} text-2xl`}>
          <li className="flex justify-center p-3 bg-yellow-500">
            <a href="https://twitter.com/?lang=es" target="_blank">
              Twitter
            </a>
          </li>
          <hr />
          <li className="flex justify-center p-3 bg-yellow-500">
            <a href="https://www.youtube.com/" target="_blank">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
