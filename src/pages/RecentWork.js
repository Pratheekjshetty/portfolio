import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import car_rental from "../assets/car_rental.png";
import food_delivery from "../assets/food_delivery.png";
import tourism_app from "../assets/tourismapp.png";
import portfolio from "../assets/portfolio.png";
import calculator from "../assets/calculator.png";
import counter from "../assets/counter.png"
import { Link } from "react-router-dom";

function RecentWork() {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));
  return (
    <>
      {/* blank space starts here -> bcs of relative and absolute */}
      <div>
        <div className="w-full sm:h-[650px] h-[1380px] bg-[#FFFFFF]"></div>
      </div>
      {/* blank space ends here -> bcs of relative and absolute */}
      <div className="Headers flex flex-col justify-center items-center gap-3 mt-[35px] md:mt-[-35px]">
        <div className="title font-eurostile sm:text-[32px] text-[30px] font-extrabold text-center mt-5 mx-10 sm:mx-0 sm:w-[600px">
          My Portfolio Highlights
        </div>
        <div className="subtitle font-serif text-[20px] w-[300px] sm:w-[600px] text-center">
          Here are a few past design projects I've worked on, showcasing my design and development work.
        </div>
      </div>
      {/* grid starts here */}
      <div className="flex flex-wrap gap-4 w-full items-center justify-center mt-10">
        <div className="work-0">
          <Box className=""
            sx={{ display: "flex", flexWrap: "wrap", width: "100%",}}>
            <ImageButton className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif" focusRipple>
              <ImageSrc style={{ backgroundImage: `url(${car_rental})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography component="span" variant="subtitle1" color="inherit"
                  sx={{ position: "relative", p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,}}>
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    Voyager Car Rental 
                    <br/>[MERN, Tailwind]
                  </Link>
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a href="https://github.com/Pratheekjshetty/accelerlab-carsharing.git" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-1">
          <Box className=""
            sx={{ display: "flex",flexWrap: "wrap",width: "100%",}}>
            <ImageButton className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif" focusRipple>
              <ImageSrc style={{ backgroundImage: `url(${food_delivery})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
              <Typography component="span" variant="subtitle1" color="inherit"
                  sx={{ position: "relative", p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,}}>
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    Feastly Food Delivery 
                    <br/>[MERN, CSS]
                  </Link>
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a href="https://github.com/Pratheekjshetty/accelerlab-foodapp.git" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-2">
          <Box className=""
            sx={{ display: "flex", flexWrap: "wrap", width: "100%",}}>
            <ImageButton className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif" focusRipple>
              <ImageSrc style={{ backgroundImage: `url(${tourism_app})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography component="span" variant="subtitle1" color="inherit"
                  sx={{ position: "relative", p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)`, }}>
                  Tourism App Website
                  <br /> [HTML CSS]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a href="https://pratheekjshetty.github.io/accelerlab-html/" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center">
                    Live demo
                  </a>
                  <a href="https://github.com/Pratheekjshetty/accelerlab-html.git" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-3">
          <Box className=""
            sx={{ display: "flex", flexWrap: "wrap", width: "100%",}}>
            <ImageButton className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif" focusRipple>
              <ImageSrc style={{ backgroundImage: `url(${portfolio})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography component="span" variant="subtitle1" color="inherit"
                  sx={{ position: "relative", p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,}}>
                  PortFolio [React JS, MUI, Tailwind, EmailJS]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <Link to="/" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center">
                    Live demo
                  </Link>
                  <a href="https://github.com/Pratheekjshetty/portfolio.git" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-4">
          <Box className=""
            sx={{display: "flex", flexWrap: "wrap", width: "100%",}}>
            <ImageButton className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif" focusRipple>
              <ImageSrc style={{ backgroundImage: `url(${calculator})` }}/>
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography component="span" variant="subtitle1" color="inherit"
                  sx={{ position: "relative", p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,}}>
                  Calculator [React JS, Tailwind]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a href="https://pratheekjshetty.github.io/accelerlab-calculator/" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center">
                    Live demo
                  </a>
                  <a href="https://github.com/Pratheekjshetty/accelerlab-calculator.git" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-5">
          <Box
            className=""
            sx={{ display: "flex", flexWrap: "wrap", width: "100%",}}>
            <ImageButton className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif" focusRipple>
              <ImageSrc style={{ backgroundImage: `url(${counter})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography component="span" variant="subtitle1" color="inherit"
                  sx={{ position: "relative", p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,}}>
                  Counter [React JS, Tailwind]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a href="https://pratheekjshetty.github.io/accelerlab-counterapp/" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center">
                    Live demo
                  </a>
                  <a href="https://github.com/Pratheekjshetty/accelerlab-counterapp.git" target="_blank" rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
      </div>
      {/* grid ends here */}
    </>
  );
}

export default RecentWork;