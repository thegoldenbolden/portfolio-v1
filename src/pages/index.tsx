import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>Jacob | Web Developer</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f8d07a" />
        <meta name="msapplication-TileColor" content="#f8d07a" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Jacob Bolden is a web developer who specializes in making responsive and accessible websites."
        />
      </Head>
      <Script
        id="tag-m"
        async={true}
        src="https://www.googletagmanager.com/gtag/js?id=G-PDMNL15FS6"
      />
      <Script
        id="set-t"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());

										gtag('config', 'G-PDMNL15FS6');`,
        }}
      />
      <Header />
      <Hero />
      <Projects />
    </>
  );
};

export default Home;
