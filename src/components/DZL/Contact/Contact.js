import React from "react";
import { TextField, Stack } from "@mui/material";
import { BannerShopButton, BannerTitle } from "../banner/styles";
import { ContactContainer, ContactTitle, ContactField } from "./styles";

const Contact = () => {
  return (
    <ContactContainer
      sx={{
        marginTop: "15px",
        marginBottom: "30px",
        paddingBottom: "8px",
      }}
    >
      <ContactTitle variant="h6">Contact Us to Get Started</ContactTitle>
      <Stack spacing={2}>
        <ContactField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required="true"
          //   InputProps={{
          //     className: {
          //       input: {
          //         color: "white",
          //       },
          //     },
          //   }}
        />
        <ContactField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          required="true"
        />
        <ContactField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          required="true"
        />
        <BannerShopButton>Send Now!</BannerShopButton>
      </Stack>
    </ContactContainer>
  );
};

export default Contact;
