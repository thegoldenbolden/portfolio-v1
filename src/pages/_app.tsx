import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { Raleway } from "@next/font/google";

const raleway = Raleway({
 weight: ["400", "700"],
 subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
 return (
  <div className={raleway.className}>
   <Component {...pageProps} />
   <Analytics />
  </div>
 );
}

export default App;
