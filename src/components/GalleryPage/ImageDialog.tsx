import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  IconButton,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddRemoveShoppingCartButton from "./AddRemoveShoppingCartButton";
import { useDialogImageMinHeight } from "../../utils/utils";
import { Image as ImageType } from "@/src/types/types";
import Image from "next/image";

const StyledPictureDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    [theme.breakpoints.down("sm")]: {
      margin: `0 ${theme.spacing(1)}`,
      width: "100%",
    },
  },
  "& .MuiDialogContent-root": {
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    },
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    },
  },
}));

interface Props {
  img: ImageType;
  closeDialog: () => void;
}

const ImageDialog = ({ img, closeDialog, open }: Props & DialogProps) => {
  const dialogPictureMinHeight = useDialogImageMinHeight();
  return (
    <StyledPictureDialog
      open={open}
      onClose={closeDialog}
      fullWidth={true}
      maxWidth="md"
    >
      <Box>
        <IconButton
          onClick={closeDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Image
            src={img.src}
            alt={"Dialog image"}
            width={4032}
            height={2268}
            sizes="
                  (max-width: 600px) 567px,
                  884px      
                  "
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              minHeight: dialogPictureMinHeight,
            }}
          />
        </DialogContent>
        <DialogActions>
          <AddRemoveShoppingCartButton image={img} closeDialog={closeDialog} />
        </DialogActions>
      </Box>
    </StyledPictureDialog>
  );
};

export default ImageDialog;
