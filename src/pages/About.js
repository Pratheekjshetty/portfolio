import React from "react";
import computer from "../assets/hero-devices-sj.svg";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import myResume from "../assets/resume/Resume.pdf";

function About() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center mt-10">
          <img className="w-[327px] sm:w-[860px]" src={computer} alt="code.png"/>
          <div className="w-full  bg-[rgb(110,7,243)] h-[700px] text-[#FFFFFF] flex justify-center items-center flex-col gap-10 "id="about">
            <div className="font-eurostile sm:text-[32px] text-[24px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px] sm:mt-[-150px] mt-[-50px] ">
              Hello, I'm Pratheek J Shetty 👋
              <br /> It's great to have you here.
            </div>
            <a href={myResume} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" className="!p-3 !sm:w-[300px] w-[150px]" endIcon={<RocketLaunchIcon />}>
                My Resume
              </Button>
            </a>
            <div className="relative font-serif sm:text-[20px] text-[18px] w-[330px] sm:w-[600px] ">
              <h1 className="text-center">
                I'm a dedicated full stack developer passionate about building dynamic and responsive web applications.
                I'm currently specializing in the MERN stack—MongoDB, Express, React, and Node.js—to deliver seamless and
                interactive user experiences. My goal is to craft innovative and high-quality web applications.
              </h1>
              <button></button>
            </div>
          </div>
          {/* 1st absolute box starts here */}
          <div className="absolute sm:w-[45%] lg:w-[35%] w-[80%] sm:top-[1700px] h-[640px] left-[10%] top-[2125px] sm:left-[4%] lg:left-[14%] bg-[#ffffff] flex flex-col gap-6 border rounded-2xl justify-center items-center text-[#141c3a] text-center hover:shadow-2xl ">
            <div className="code w-[82px] mt-[-30px] sm:mt-5">
              <img className="w-[72px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ePgveMjN5Z9IdGaoO-i_yfE3-ASN7QATU1_PSuqK5C6VM0m" alt="code"/>
            </div>
            <div>
              <h1 className="text-[24px] font-eurostile font-extrabold mx-2">
                Frontend Developer
              </h1>
            </div>
            <div>
              <h6 className="sm:w-[200px] lg:w-[300px] w-[250px]">
               I enjoy transforming ideas into reality through code, bringing creative designs to life in the browser.
              </h6>
            </div>
            <div className="text-[18px] ">
              <span className="text-[#6E07F3]">Languages I Use:</span>
              <br />
              JavaScript, HTML, CSS
            </div>
            <div className="">
              <span className="text-[#6E07F3]">Tools & Technologies:</span>
              <br />
              React JS <br />
              Tailwind CSS <br />
              MUI, Github<br /> 
              Netlify<br /> 
              VS Code<br />
            </div>
          </div>
          {/* 1st absolute box ends here */}

          {/* 2nd absolute box starts here */}
          <div className="absolute sm:w-[45%] lg:w-[35%] w-[80%] sm:top-[1700px] h-[640px] right-[10%] top-[2125px] sm:right-[4%] lg:right-[14%] bg-[#ffffff] flex flex-col gap-6 border rounded-2xl justify-center items-center text-[#141c3a] text-center hover:shadow-2xl">
            <div className="code w-[82px] mt-[-30px] sm:mt-5">
              <img className="w-[72px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ePgveMjN5Z9IdGaoO-i_yfE3-ASN7QATU1_PSuqK5C6VM0m" alt="code"/>
            </div>
            <div>
              <h1 className="text-[24px] font-eurostile font-extrabold mx-5">
                Full Stack Developer
              </h1>
            </div>
            <div>
              <h6 className="sm:w-[200px] lg:w-[300px] w-[250px]">
               My expertise lies in creating dynamic user interfaces with efficient backend integration for a complete web experience.
              </h6>
            </div>
            <div className="text-[18px] ">
              <span className="text-[#6E07F3]">Languages I Use:</span>
              <br /> Python, JavaScript
            </div>
            <div>
              <span className="text-[#6E07F3]">Tools & Technologies:</span>
              <div className="grid grid-cols-2 gap-5 text-center">
                <div>
                  Node JS<br />
                  React JS<br />
                  Express JS<br /> 
                  MongoDB<br /> 
                  Axios<br /> 
                  GitHub<br />
                </div>
                <div>
                  Mongoose<br />
                  Postman API<br /> 
                  Nodemon<br />
                  JSON Web Token<br />
                  Netlify<br /> 
                  VS Code<br /> 
                </div>
              </div>
            </div>
          </div>
          {/* 2nd absolute box ends here */}
        </div>

        {/* absolute link to my page starts here */}
        <div className="absolute sm:w-[95%] md:w-[60%] md:left-[20%] sm:left-[2.5%] w-[90%] sm:px-10 mb-10 bg-[#6E07F3] h-[100px] sm:h-[90px] sm:top-[2330px] top-[2749px] text-white text-center left-[5%] font-mono border rounded-xl hover:shadow-2xl text-sm sm:text-sm flex items-center">
          <h1 className="mx-3 text-center">
            Want to learn more? Connect with me on &nbsp;
            <a className="text-[#ffffff] underline" href="https://www.linkedin.com/in/pratheek-j-shetty-815295226/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            and explore my projects on &nbsp;
            <a className="text-[#ffffff] underline" href="https://github.com/Pratheekjshetty" target="_blank" rel="noopener noreferrer">
              GitHub.
            </a>
          </h1>
        </div>
        {/* absolute link to my page ends here */}
      </div>
    </>
  );
}

export default About;