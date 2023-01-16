import React, { useState, useEffect, useRef } from "react";
import { TextField, Stack, Container } from "@mui/material";
import { BannerShopButton, BannerTitle } from "../banner/styles";
import { ContactContainer, ContactTitle, ContactField } from "./styles";
import { Colors } from "../../../theme/home";
import emailjs from "@emailjs/browser";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID_CONTACT_US,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (name !== "") {
      if (email !== "") {
        if (message !== "") {
          setIsEnabled(true);
        }
      }
    }
  }, [email, message, name]);

  return (
    <Container>
      {!isEmailSent ? (
        <ContactContainer
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
            paddingBottom: "8px",
          }}
        >
          <ContactTitle variant="h6">Contact Us to Get Started</ContactTitle>
          <form ref={form} onSubmit={handleSendEmail}>
            <Stack spacing={2}>
              <ContactField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="user_name"
                required="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ContactField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                name="user_email"
                required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ContactField
                id="outlined-multiline-static"
                label="Message"
                name="user_message"
                multiline
                rows={4}
                required="true"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <BannerShopButton disabled={!isEnabled} type="submit">
                Send Now!
              </BannerShopButton>
            </Stack>
          </form>
        </ContactContainer>
      ) : (
        <Stack
          direction={"row"}
          sx={{
            marginTop: "40px",
            marginBottom: "30px",
            paddingBottom: "8px",
          }}
        >
          <CheckCircleIcon style={{ fontSize: 80, color: Colors.success }} />
          <ContactTitle
            variant="h6"
            sx={{ color: Colors.success, textAlign: "center" }}
          >
            Thank you for your message! A team member will reach out to you soon
            via the email address you provided.
          </ContactTitle>
        </Stack>
      )}
    </Container>
  );
};

export default Contact;
