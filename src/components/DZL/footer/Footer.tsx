import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../../theme/home";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "./styes";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.dark,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography>
            We are a small busuiness located in Orlando, Florida looking to help
            other small busuiness grow!
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            {/* <FacebookIcon sx={{ mr: 1 }} /> */}
            {/* <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon /> */}
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2}>Privacy &amp; Policy</Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2}>Terms &amp; Conditions</Typography>
            </ListItemText>
          </List>
        </Grid>
        {/* <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2}>Login</Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2}>My Cart</Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2}>My Account</Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2}>Wishlist</Typography>
            </ListItemText>
          </List>
        </Grid> */}
      </Grid>
      <Typography lineHeight={2}>
        2022 All Rights Reserved - Drop Zone Live LLC
      </Typography>
    </Box>
  );
}
