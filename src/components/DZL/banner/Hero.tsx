import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "./styles";

export default function Hero() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/DZL/banner.jpg" />
      <BannerContent>
        <Typography variant="h6">Web-Based Applications</Typography>
        <BannerTitle variant="h6">Small Business Soltuons</BannerTitle>

        <BannerDescription>
          Drop Zone Live is here to help small businesses or simple ideas get
          off the ground and accelerate.
        </BannerDescription>

        <BannerShopButton>Explore Options</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
