import { Grid, Link, Typography } from "@mui/material";
import * as RouterLink from "next/link";

export default function EmptyShoppingCartInformation() {
  return (
    <Grid item xs={12}>
      <Typography gutterBottom>Your shopping cart is empty.</Typography>
      <Typography>
        Please browse the {/* @ts-ignore*/}
        <Link component={RouterLink} href="/gallery?season=all">
          gallery
        </Link>{" "}
        to add items to your shopping cart.
      </Typography>
    </Grid>
  );
}
