import { Button } from "@mui/material";
import { Image } from "@/src/types/types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { showSuccessMsg } from "@/src/utils/toast";
import {
  ShoppingCartTypes,
  useShoppingCart,
  useShoppingCartDispatch,
} from "@/src/context/ShoppingCartContext";

interface Props {
  image: Image;
  closeDialog: () => void;
}

const AddRemoveShoppingCartButton = ({ image, closeDialog }: Props) => {
  const shoppingCart = useShoppingCart();
  const shoppingCartDispatch = useShoppingCartDispatch();
  const buttonType = shoppingCart.itemIds.find(
    (imageId) => imageId === image.id
  )
    ? "remove"
    : "add";
  return (
    <Button
      endIcon={
        buttonType === "add" ? (
          <AddShoppingCartIcon />
        ) : (
          <RemoveShoppingCartIcon />
        )
      }
      sx={(theme) => ({
        margin: `${theme.spacing(0.5)} ${theme.spacing(0)}`,
      })}
      variant="contained"
      onClick={() => {
        buttonType === "add"
          ? shoppingCartDispatch({
              type: ShoppingCartTypes.ADD,
              payload: { itemId: image.id },
            })
          : shoppingCartDispatch({
              type: ShoppingCartTypes.REMOVE,
              payload: { itemId: image.id },
            });
        closeDialog();
        showSuccessMsg(
          buttonType === "add"
            ? "Picture added to the shopping cart"
            : "Picture removed from the shopping cart"
        );
      }}
    >
      {buttonType === "add" ? "Add to cart" : "Remove from cart"}
    </Button>
  );
};

export default AddRemoveShoppingCartButton;
