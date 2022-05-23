import type { AppProps } from "next/app";
import { useEffect, useLayoutEffect, useState } from "react";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
