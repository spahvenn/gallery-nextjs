import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useShoppingCart } from "@/src/context/ShoppingCartContext";
import { visuallyHidden } from "@mui/utils";

const ShoppingCartNavItem = () => {
  const { itemIds } = useShoppingCart();
  return (
    <>
      <Link href="/shopping-cart" style={{ height: "1.5rem" }}>
        <ShoppingCartIcon
          sx={(theme) => ({
            color:
              theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.contrastText,
          })}
        />
        <Box component="span" sx={visuallyHidden}>
          Shopping Cart Icon
        </Box>
      </Link>
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={(theme) => ({
            position: "absolute",
            right: 4,
            bottom: 9,
            color: theme.palette.primary.contrastText,
            fontSize: "0.7rem",
            fontWeight: "bold",
            backgroundColor: "red",
            borderRadius: "1rem",
            padding: "0px 4px",
          })}
        >
          {itemIds.length}
        </Typography>
      </Box>
    </>
  );
};

export default ShoppingCartNavItem;
