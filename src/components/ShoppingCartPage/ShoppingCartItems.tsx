import { Grid } from "@mui/material";
import Image from "next/image";
import { Image as ImageType } from "@/src/types/types";
import { getImageById } from "@/src/utils/utils";

interface Props {
  itemIds: number[];
  setDialogPicture: (image: ImageType) => void;
}

export default function ShoppingCartItems({
  itemIds,
  setDialogPicture,
}: Props) {
  return (
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
  );
}
