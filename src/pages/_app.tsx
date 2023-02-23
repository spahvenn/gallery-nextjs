import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { useMemo } from "react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { GeneralProvider, useGeneral } from "../context/GeneralContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/index.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { uiMode } = useGeneral();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: uiMode,
        },
      }),
    [uiMode]
  );
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ToastContainer theme={theme.palette.mode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default function MyApp(props: MyAppProps) {
  return (
    <GeneralProvider>
      <ShoppingCartProvider>
        <App {...props} />
      </ShoppingCartProvider>
    </GeneralProvider>
  );
}
