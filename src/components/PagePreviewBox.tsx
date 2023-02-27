import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pagePreviewInfo: {
    src: string;
    title: string;
    description: string;
    btnUrl: string;
  };
}

export function PagePreviewBox({ pagePreviewInfo }: Props) {
  const { src, title, description, btnUrl } = pagePreviewInfo;
  return (
    <Box mb={{ md: 2, lg: 0 }}>
      <Link href={btnUrl}>
        <Image
          alt={title}
          src={src}
          width={4032}
          height={2268}
          layout="responsive"
          sizes="
          (max-width: 900px) 570px,
          270px      
          "
        />
      </Link>
      <Typography variant="h5" mt={0.5} mb={0.5}>
        {title}
      </Typography>
      <Typography mb={1.5}>{description}</Typography>
      <Button component={Link} href={btnUrl} variant="contained" fullWidth>
        Browse the collection
      </Button>
    </Box>
  );
}
