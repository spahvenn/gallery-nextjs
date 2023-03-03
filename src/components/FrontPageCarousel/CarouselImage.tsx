import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "../../utils/utils";

export function CarouselImage({
  carouselItem,
  priority,
}: {
  carouselItem: CarouselItem;
  priority: boolean;
}) {
  return (
    <Link href={"/gallery?season=" + carouselItem.season}>
      <Image
        src={carouselItem.src}
        alt={carouselItem.season}
        width={4032}
        height={2268}
        sizes="
        (max-width: 1200px) 100vw,
        1200px      
        "
        priority={priority}
        style={{
          display: "block",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />
    </Link>
  );
}
