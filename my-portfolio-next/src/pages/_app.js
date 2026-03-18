import "../styles/Global.scss";
import "../styles/Hero.scss";
import "../styles/Lana.scss";
import "../styles/Projects.scss";
import "../styles/AboutTop.scss";
import "../styles/AboutStuff.scss";
import "../styles/CosmicBackground.scss";
import "../styles/LoadingScreen.scss";
import "../styles/ProjectDetail.scss";
import "../styles/ScrollProgressBar.scss";
import "../styles/Navbar.scss";
import "../styles/Footer.scss";
import "../styles/BackButton.scss";
import "../styles/BehavAI.scss";
import "../styles/Aquatonomy.scss";
import "../styles/Hira.scss";
import "../styles/TapTap.scss";
import "../styles/LightTheMuse.scss";
import "../styles/UnderConstructionPage.scss";

import { useEffect, useState, useRef, cloneElement, Children } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const CosmicBackground = dynamic(() => import("../components/CosmicBackground"), {
  ssr: false,
});

const GA_ID = "G-MMV7J0WD88";

let hasLoadedOnce = false;

function SiteLayout({
  children,
  showLoading,
  loadingComplete,
  onLoadComplete,
  pathname,
}) {
  const childWithProps = Children.map(children, (child) =>
    cloneElement(child, { isLoading: !loadingComplete })
  );

  const isCosmicPage = pathname === "/" || pathname === "/about";

  return (
    <>
      {isCosmicPage && <CosmicBackground showFluidCursor={loadingComplete} />}
      {showLoading && <LoadingScreen onLoadComplete={onLoadComplete} />}
      {loadingComplete && <Navbar />}
      {childWithProps}
      {loadingComplete && <Footer />}
    </>
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  const shouldLoad = isHomePage && !hasLoadedOnce;
  const [showLoading, setShowLoading] = useState(shouldLoad);
  const [loadingComplete, setLoadingComplete] = useState(!shouldLoad);
  const hideTimeoutRef = useRef(null);

  const forceNativeCursor = () => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.add("cursor-native");
    document.body.classList.add("cursor-native");
  };

  const handleLoadComplete = () => {
    hasLoadedOnce = true;
    setLoadingComplete(true);

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => setShowLoading(false), 320);

    requestAnimationFrame(() => {
      forceNativeCursor();
    });
  };

  useEffect(() => {
    forceNativeCursor();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);

      forceNativeCursor();

      if (typeof window.gtag === "function") {
        window.gtag("config", GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  const getLayout =
    Component.getLayout ||
    ((page) => (
      <SiteLayout
        showLoading={showLoading}
        loadingComplete={loadingComplete}
        onLoadComplete={handleLoadComplete}
        pathname={router.pathname}
      >
        {page}
      </SiteLayout>
    ));

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}