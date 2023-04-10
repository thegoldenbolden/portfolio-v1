import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import "../styles/globals.scss";

const raleway = Raleway({
 weight: ["400", "700"],
 subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
 return (
  <div className={raleway.className}>
   <Component {...pageProps} />
  </div>
 );
}

export default App;
