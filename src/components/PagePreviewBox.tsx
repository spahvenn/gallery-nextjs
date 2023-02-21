import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  pagePreviewInfo: {
    src: string;
    srcSmall: string;
    title: string;
    description: string;
    btnUrl: string;
  };
}

export function PagePreviewBox({ pagePreviewInfo }: Props) {
  const { srcSmall, title, description, btnUrl } = pagePreviewInfo;
  return (
    <Box mb={{ md: 2, lg: 0 }}>
      <Link href={btnUrl}>
        <img alt={title} style={{ width: "100%" }} src={srcSmall} />
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
