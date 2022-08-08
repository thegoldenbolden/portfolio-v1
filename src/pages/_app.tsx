import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Layout from "../layout";
import { ThemeProvider } from "../context/ThemeContext";

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
