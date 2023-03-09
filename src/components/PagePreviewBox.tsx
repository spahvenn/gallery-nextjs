import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  priority?: boolean;
  pagePreviewInfo: {
    src: string;
    title: string;
    description: string;
    btnUrl: string;
  };
}

export function PagePreviewBox({ pagePreviewInfo, priority }: Props) {
  const { src, title, description, btnUrl } = pagePreviewInfo;
  return (
    <Box mb={{ md: 2, lg: 0 }}>
      <Card>
        <Link href={btnUrl}>
          <Image
            alt={title}
            src={src}
            width={4032}
            height={2268}
            priority={priority}
            sizes="(max-width: 599px) 100vw, 
                (max-width: 1199px) 50vw,
                270px"
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        </Link>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography mb={1.5}>{description}</Typography>
          <Button component={Link} href={btnUrl} variant="contained" fullWidth>
            Browse the collection
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
