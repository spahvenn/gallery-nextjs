import { carouselItems } from "../../utils/utils";
import { useState } from "react";
import {
  DesktopCarouselContainer,
  MobileCarouselContainer,
} from "./CarouselContainers";
import { useMediaQuery, useTheme } from "@mui/material";

export default function FrontPageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const xsSize = useMediaQuery(theme.breakpoints.only("xs"));

  function onChange(now?: number) {
    if (now) {
      setCurrentImageIndex(now);
    }
  }

  return (
    <>
      {xsSize && (
        <MobileCarouselContainer
          carouselItems={carouselItems}
          onChange={onChange}
          currentImageIndex={currentImageIndex}
        />
      )}
      {!xsSize && (
        <DesktopCarouselContainer
          carouselItems={carouselItems}
          onChange={onChange}
          currentImageIndex={currentImageIndex}
        />
      )}
    </>
  );
}
