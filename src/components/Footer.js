import React from "react";
import logo from "../assets/White_logo1.png";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="w-full bg-[#5e17eb] h-[400px] text-[#FFFFFF] flex justify-center items-center flex-col gap-10 mt-10">
        <Link to="/">
          <div className="w-[90px]">
            <img src={logo} alt="logo"/>
          </div>
        </Link>
        <div className="font-eurostile sm:text-[22px] text-[18px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px] ">
         Continuously learning, growing, and improving<br /> every single day.
        </div>
        <div className="Buttons-link flex gap-3">
          <a href="https://soorajjain.github.io/portfolio_Soorajjain" target="_blank" rel="noopener noreferrer"
            className="w-[47px] h-[47px] border border-white rounded-[50%] hover:text-[rgb(110,7,243)] hover:bg-white flex justify-center items-center">
            <LanguageIcon />
          </a>
          <a href="https://www.linkedin.com/in/pratheek-j-shetty-815295226/" target="_blank" rel="noopener noreferrer"
            className="w-[47px] h-[47px] border border-white rounded-[50%] hover:text-[rgb(110,7,243)] hover:bg-white flex justify-center items-center">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Pratheekjshetty" target="_blank" rel="noopener noreferrer"
            className="w-[47px] h-[47px] border border-white rounded-[50%] hover:text-[rgb(110,7,243)] hover:bg-white flex justify-center items-center">
            <GitHubIcon />
          </a>
          <a href="mailto:pratheekjshetty6696@gmail.com" target="_blank" rel="noopener noreferrer"
            className="w-[47px] h-[47px] border border-white rounded-[50%] hover:text-[rgb(110,7,243)] hover:bg-white flex justify-center items-center">
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;