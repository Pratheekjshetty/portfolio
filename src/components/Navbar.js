import React from "react";
import logo from "../assets/Blue_logo1.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
function Navbar() { 
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    if (location.pathname !== "/") {
      navigate("/", { state: { targetId } });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <nav id="home" className="w-full bg-[#FFFFFF]">
      <div className="Navbar max-w-[1170px] h-[126px] text-[#141C3A] lg:mx-auto flex justify-between py-8 bg-[#FFFFFF] mx-3 mt-[-20px] sm:mt-0">
        <div className="flex  items-center">
          <Link to="/" className="px-1 mt-5 w-[100px]">
            <img src={logo} alt="logo"/>
          </Link>
        </div>
        <div className="flex gap-14 items-center mx-4 text-l">
          <a
            href="#about"
            onClick={handleScroll}
            className="hidden hover:text-[#6E07F3] md:block">
            About Pratheek
          </a>
          <Link
            to="/contact"
            className="border-[2px] border-[#6E07F3]  hover:bg-[#6E07F3] hover:text-[#FFFFFF] rounded-3xl md:p-3 md:px-6 p-2 px-3 ">
            Say Hello
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;