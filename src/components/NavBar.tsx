import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { stack as Menu } from "react-burger-menu"; // Use bubble type menu
import "./NavBar.css"; // Import styles for react-burger-menu
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  return (
    <>
      <nav className="p-4 ">
        <div className="container mx-auto flex justify-between items-center ">
          <Link to={"/"}>
            <div className="text-black text-lg">CREATIVE</div>
          </Link>
          <ul className="flex space-x-4 ">
            <li className="pt-2">
              <a href="#" className="text-white">
                <img src="/icons8-search-50.png" alt="" className="w-[26px]" />
              </a>
            </li>
            <li className="pt-2">
              <a href="#" className="text-white">
                <img src="/icons8-shopping-trolley-64.png" alt="" className="w-[26px]" />
              </a>
            </li>
            <li className=" pt-2">
              <a href="#" className="text-white">
                <img src="/icons8-user-32.png" alt="" className="w-[26px]" />
              </a>
            </li>
            <li className="">
              <a href="#">
                <Hamburger
                  label="Show menu"
                  toggled={isOpen}
                  toggle={setIsOpen}
                  size={30}
                  direction="right"
                  distance="lg"
                  onToggle={(toggled) => {
                    setIsOpen(toggled);
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Menu right isOpen={isOpen} onStateChange={handleMenuToggle} className="bg-gray-900 text-white">
        <a id="mobile" className="menu-item menu-item-hover-translate" href="/mobile">
          Mobile
        </a>
        <a id="ai" className="menu-item menu-item-hover-rotate" href="/ai">
          AI
        </a>
        <a id="tablets" className="menu-item menu-item-hover-gradient" href="/tablets">
          Tablets
        </a>
        <a id="watches" className="menu-item menu-item-hover-translate-y" href="/watches">
          Watches
        </a>
        <a id="home-appliance" className="menu-item menu-item-hover-border" href="/home-appliance">
          Home Appliance
        </a>
        <a id="computing" className="menu-item menu-item-hover-bounce" href="/computing">
          Computing
        </a>
        <a id="headphone" className="menu-item menu-item-hover-pulse" href="/headphone">
          Headphone
        </a>
        <a id="keyboard" className="menu-item menu-item-hover-bg-gradient" href="/keyboard">
          Keyboard
        </a>
        <a id="monitor" className="menu-item menu-item-hover-translate-y" href="/monitor">
          Monitor
        </a>
        <a id="mouse" className="menu-item menu-item-hover-translate-x" href="/mouse">
          Mouse
        </a>
        <a id="renewed" className="menu-item menu-item-hover-rotate-small" href="/shop-certified-re-newed">
          Shop Certified Re-Newed
        </a>
      </Menu>
    </>
  );
};

export default NavBar;
