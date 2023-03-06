import { Grid, styled } from "@mui/material";
import { PagePreviewBox } from "../components/PagePreviewBox";
import { BasicLayout } from "../components/Layout/Layout";
import FrontPageCarousel from "../components/FrontPageCarousel/FrontPageCarousel";
import { pagePreviews } from "../utils/utils";
import Head from "next/head";

const CarouselGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    marginTop: theme.spacing(-1.5),
    marginBottom: theme.spacing(-1.5),
  },
}));

function FrontPage() {
  return (
    <BasicLayout>
      <Head>
        <title>Gallery | The best seasonal images |</title>
        <meta
          name="description"
          content="Check out the best seasonal images for all uses: spring, summer, autumn and winter."
        />
      </Head>
      <Grid container spacing={3}>
        <CarouselGrid item xs={12}>
          <FrontPageCarousel />
        </CarouselGrid>
        <Grid item xs={12} sm={6} lg={3}>
          <PagePreviewBox pagePreviewInfo={pagePreviews.spring} priority />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <PagePreviewBox pagePreviewInfo={pagePreviews.summer} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <PagePreviewBox pagePreviewInfo={pagePreviews.autumn} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <PagePreviewBox pagePreviewInfo={pagePreviews.winter} />
        </Grid>
      </Grid>
    </BasicLayout>
  );
}

export default FrontPage;
