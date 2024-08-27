import React, { useEffect } from "react";
import pratheek from "../assets/pratheek1.png";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetId) {
      const targetElement = document.getElementById(location.state.targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location.state]);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 sm:mt-8 gap-6 mx-5 sm:mx-0">
        <div className="block-1 font-eurostile sm:text-[48px] text-[32px] font-extrabold text-center">
          Full Stack Web Developer and
          <br/> Frontend Developer
        </div>
        <div className="block-2 font-sans sm:text-[24px] text-[20px] text-center ">
          I create and code simple, beautiful designs, and I’m passionate about what I do.
        </div>
        <div className="block-3">
          <img className="w-[300px]" src={pratheek} alt="Pratheek"/>
        </div>
      </div>
    </>
  );
}

export default Home;