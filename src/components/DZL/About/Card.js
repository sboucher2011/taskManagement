import { useState } from "react";
import { Product, ProductMetaWrapper } from "./styles";
import { Stack, Tooltip, Typography } from "@mui/material";
import { Colors } from "../../../theme/home";

import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";

export default function Card({ product, matches }) {
  //   const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
  //     useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product
        sx={{
          borderRadius: "8px",
          p: 2,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <ProductImage src={product.image} /> */}
        {product.id === 1 && (
          <StackedBarChartIcon style={{ fontSize: 40, color: "white" }} />
        )}
        {product.id === 2 && (
          <AutoAwesomeIcon style={{ fontSize: 40, color: "white" }} />
        )}
        {product.id === 3 && (
          <LocalGroceryStoreIcon style={{ fontSize: 40, color: "white" }} />
        )}
        {product.id === 4 && (
          <AppShortcutIcon style={{ fontSize: 40, color: "white" }} />
        )}

        <ProductMetaWrapper>
          <Typography
            variant={matches ? "h6" : "h5"}
            lineHeight={2}
            sx={{ color: "white" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant={matches ? "caption" : "body1"}
            sx={{ color: "white", textAlign: "center" }}
          >
            {product.description}
          </Typography>
        </ProductMetaWrapper>
      </Product>
    </>
  );
}
