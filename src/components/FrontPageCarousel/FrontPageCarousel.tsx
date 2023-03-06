import { carouselItems } from "../../utils/utils";
import { useState } from "react";
import {
  DesktopCarouselContainer,
  MobileCarouselContainer,
} from "./CarouselContainers";
import { Box, styled } from "@mui/material";

const RenderOnMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only("sm")]: {
    display: "block",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const RenderOnDesktop = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export default function FrontPageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function onChange(now?: number) {
    if (now) {
      setCurrentImageIndex(now);
    }
  }

  return (
    <>
      <RenderOnMobile>
        <MobileCarouselContainer
          carouselItems={carouselItems}
          onChange={onChange}
          currentImageIndex={currentImageIndex}
        />
      </RenderOnMobile>
      <RenderOnDesktop>
        <DesktopCarouselContainer
          carouselItems={carouselItems}
          onChange={onChange}
          currentImageIndex={currentImageIndex}
        />
      </RenderOnDesktop>
    </>
  );
}
