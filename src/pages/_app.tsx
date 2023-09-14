import GlobalLayout from "@/layouts/GlobalLayout";
import "@/styles/globals.css";
import createEmotionCache from "@/utils/createEmotionCache";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { useRouter } from "next/router";
import ConversationLayout from "@/layouts/ConversationLayout";
import AdminLayout from "@/layouts/AdminLayout";
import axios from "axios";

axios.defaults.headers.common["Cache-Control"] = "no-cache";

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const TopProgressBar = dynamic(
    () => {
      return import("../components/UI/Progress");
    },
    { ssr: false }
  );
  const router = useRouter();

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RecoilRoot>
            <TopProgressBar />
            {router.pathname.startsWith("/conversations") ? (
              <ConversationLayout>
                <Component {...pageProps} />
              </ConversationLayout>
            ) : router.pathname.startsWith("/superadmin") ? (
              <AdminLayout>
                <Component {...pageProps} />
              </AdminLayout>
            ) : router.pathname.startsWith("/loginPage") ||
              router.pathname.startsWith("/404") ? (
              <Component {...pageProps} />
            ) : (
              <GlobalLayout>
                <Component {...pageProps} />
              </GlobalLayout>
            )}
          </RecoilRoot>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
