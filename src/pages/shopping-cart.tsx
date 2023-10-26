import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ImageDialog from "../components/GalleryPage/ImageDialog";
import { BasicLayout } from "../components/Layout/Layout";
import { showInfoMsg } from "../utils/toast";
import { emptyImageValue } from "../utils/utils";
import { useShoppingCart } from "../context/ShoppingCartContext";
import EmptyShoppingCartInformation from "@/src/components/ShoppingCartPage/EmptyShoppingCartInformation";
import ShoppingCartItems from "@/src/components/ShoppingCartPage/ShoppingCartItems";

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
        {itemIds.length === 0 && <EmptyShoppingCartInformation />}
        {itemIds.length > 0 && (
          <>
            <ShoppingCartItems
              itemIds={itemIds}
              setDialogPicture={setDialogPicture}
            />
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
