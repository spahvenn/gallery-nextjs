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
    if (urlSeason) {
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
  }, [router.query]);

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
      {router.query.season && (
        <Grid container spacing={0.5} mb={0.5}>
          {imageBank[selectedSeason].map((image, index) => {
            return (
              <Grid key={image.src} item xs={12} sm={6} md={4} lg={3}>
                <Box
                  tabIndex={0}
                  onClick={() => openPictureDialog(image)}
                  onKeyDown={(event) =>
                    event.key === "Enter" ? openPictureDialog(image) : null
                  }
                  sx={(theme) => ({
                    overflow: "hidden",
                    ":focus": {
                      outline: `${theme.palette.primary.main} solid 3px`,
                    },
                  })}
                >
                  <StyledImage
                    priority={index === 0 || index === 1 || index === 2}
                    layout="responsive"
                    src={image.src}
                    alt={selectedSeason}
                    width={4032}
                    height={2268}
                    sizes="
                  (max-width: 599px) 100vw,
                  (max-width: 899px) 50vw,
                  (max-width: 1199px) 33vw,
                  25vw      
                  "
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
      {dialogPicture.id !== 0 && (
        <ImageDialog
          open={dialogPicture.id !== 0}
          onClose={closePictureDialog}
          img={dialogPicture}
          closeDialog={closePictureDialog}
        />
      )}
    </Layout>
  );
}
