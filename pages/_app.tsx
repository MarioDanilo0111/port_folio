import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Head from "next/head";
import { seoProps } from "../project-hooks/hooks/SeoProps";
import { useSEO } from "../project-hooks/hooks/useSEO";

export default function App({ Component, pageProps }: AppProps) {
  const { title, description, author } = useSEO(seoProps);
  useEffect(() => {
    AOS.init({
      /* disable: false, */
      /* startEvent: "DOMContentLoaded",  */
      /* initClassName: "aos-init",  */
      /* disableMutationObserver: false,  */
      /* debounceDelay: 50,  */
      /* throttleDelay: 99,  */

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120,
      delay: 0,
      duration: 1600,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <Head>
        <title>
          {title || "Front End Portfolio - JavaScript & TypeScript Project"}
        </title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
