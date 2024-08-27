import * as React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, email, message);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Fill out all the fields !!");
      return; 
    } else {
      emailjs
        .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, 
          process.env.REACT_APP_PUBLIC_KEY,
        )
        .then(
          () => {
            toast.success("Email sent successfully!");
          },
          (error) => {
            toast.error("Failed to send email. Please try again.");
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      <Container component="main" maxWidth="xs" className="">
        <CssBaseline />
        <Box
          sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center",}}>
          <h1 className="text-center font-eurostile text-[45px] mb-10">
            Thanks for taking the time to reach out.
          </h1>
          <Box
            component="form" noValidate onSubmit={sendEmail} ref={form} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField autoComplete="given-name" name="first_name" required fullWidth id="name" label="Name" autoFocus onChange={(e) => setName(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="reply_to" autoComplete="email" onChange={(e) => setEmail(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="message" label="Message" multiline rows={6}  onChange={(e) => setMessage(e.target.value)}/>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Submit </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}