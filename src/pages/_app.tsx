import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Layout from "../layout";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import { useContext, useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
 return (
  <ThemeProvider>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </ThemeProvider>
 );
}

export default App;
