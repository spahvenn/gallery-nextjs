import { Button, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import * as RouterLink from "next/link";
import ImageDialog from "../components/GalleryPage/ImageDialog";
import { BasicLayout } from "../components/Layout/Layout";
import { showInfoMsg } from "../utils/toast";
import { emptyImageValue, getImageById } from "../utils/utils";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Image from "next/image";

const ShoppingCartPage = () => {
  const { itemIds } = useShoppingCart();
  const [dialogPicture, setDialogPicture] = useState(emptyImageValue);
  return (
    <BasicLayout>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" mb={3}>
            Shopping Cart
          </Typography>
        </Grid>
        {itemIds.length === 0 && (
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
        )}
        {itemIds.length > 0 && (
          <>
            <Grid container spacing={0.5} mb={2}>
              {itemIds.map((itemId) => {
                return (
                  <Grid key={itemId} item xs={6} sm={4} md={3}>
                    <Image
                      src={getImageById(itemId).src}
                      alt={"Shopping cart item"}
                      width={4032}
                      height={2268}
                      onClick={() => setDialogPicture(getImageById(itemId))}
                      sizes="282px"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        cursor: "pointer",
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Typography mb={2} fontSize="1.25rem">
                  Total Price: {itemIds.length} * 10 € = {itemIds.length * 10} €
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    showInfoMsg(
                      "This is end of the demo. Thanks for trying it out!"
                    );
                  }}
                >
                  Proceed to purchase
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
      <ImageDialog
        open={dialogPicture.id !== 0}
        onClose={() => setDialogPicture(emptyImageValue)}
        img={dialogPicture}
        closeDialog={() => setDialogPicture(emptyImageValue)}
      />
    </BasicLayout>
  );
};

export default ShoppingCartPage;
