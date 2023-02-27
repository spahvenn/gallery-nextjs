import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { emptyImageValue, imageBank } from "../utils/utils";
import SeasonSelector from "../components/GalleryPage/SeasonSelector";
import ImageDialog from "../components/GalleryPage/ImageDialog";
import { Box, Grid, styled } from "@mui/material";
import { useRouter } from "next/router";
import { Image as ImageType } from "@/src/types/types";
import Image from "next/image";

const StyledImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "block",
  cursor: "pointer",
  transition: "transform 0.5s ease",
  ":hover": { transform: "scale(1.2)" },
}));

export default function GalleryPage() {
  const [selectedSeason, setSelectedSeason] = useState("all");
  const [dialogPicture, setDialogPicture] =
    useState<ImageType>(emptyImageValue);
  const router = useRouter();

  useEffect(() => {
    const urlSeason = router.query.season;
    if (urlSeason && urlSeason !== null) {
      setSelectedSeason(urlSeason as string);
    }

    const pictureId = router.query.pictureId;
    if (pictureId) {
      const picture = imageBank.all.find((pic) => {
        return pic.id === Number(pictureId);
      });
      if (picture) {
        setDialogPicture(picture);
      }
    }
  }, []);

  function openPictureDialog(image: ImageType) {
    router.push(
      router.pathname +
        "?season=" +
        router.query.season +
        "&pictureId=" +
        image.id
    );
    setDialogPicture(image);
  }

  function closePictureDialog() {
    router.push(router.pathname + "?season=" + router.query.season);
    setDialogPicture(emptyImageValue);
  }

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 2, mb: 0.5 }}>
        <SeasonSelector
          setSelectedSeason={setSelectedSeason}
          selectedSeason={selectedSeason}
        />
      </Container>
      <Grid container spacing={0.5} mb={0.5}>
        {imageBank[selectedSeason].map((image) => {
          return (
            <Grid key={image.src} item sm={6} md={4} lg={3}>
              <Box
                sx={{
                  overflow: "hidden",
                }}
              >
                <StyledImage
                  src={image.src}
                  alt={selectedSeason}
                  width={4032}
                  height={2268}
                  onClick={() => openPictureDialog(image)}
                  sizes="
                  (max-width: 600px) 100vw,
                  (max-width: 900px) 50vw,
                  (max-width: 1200px) 33vw,
                  25vw      
                  "
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <ImageDialog
        open={dialogPicture.id !== 0}
        onClose={closePictureDialog}
        img={dialogPicture}
        closeDialog={closePictureDialog}
      />
    </Layout>
  );
}
