import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { products } from "./data";
import SingleProduct from "./Card";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerTitle,
  BannerDescription,
} from "../banner/styles";

export default function About() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <SingleProduct product={product} matches={matches} />
    </Grid>
  ));

  return (
    <Container sx={{ marginTop: "15px" }}>
      <BannerTitle
        variant={"h3"}
        lineHeight={2}
        sx={{ color: "black", fontSize: "52px" }}
      >
        What is your perfect soltuion?
      </BannerTitle>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <BannerTitle variant={"h3"} lineHeight={2} sx={{ color: "black" }}>
          Work Smarter Not Harder
        </BannerTitle>
        <Stack>
          <BannerDescription
            variant={"body1"}
            sx={{
              color: "black",
              textAlign: "left",
              marginTop: "12px",
            }}
          >
            We work with you to transform your dream into a passive income or
            active business. Working with new or small businesses is our
            specialty, we have different contract pricing offers that help make
            building your vision a reality. Contact us today to start your
            journey!
          </BannerDescription>
          <BannerDescription
            variant={"body1"}
            sx={{
              color: "black",
              textAlign: "letf",
            }}
          >
            We work with you to transform your dream into a passive income or
            active business. Working with new or small businesses is our
            specialty, we have different contract pricing offers that help make
            building your vision a reality. Contact us today to start your
            journey!
          </BannerDescription>
          <BannerDescription
            variant={"body1"}
            sx={{
              color: "black",
              textAlign: "center",
            }}
          >
            Contact us today to start your journey!
          </BannerDescription>
        </Stack>
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
