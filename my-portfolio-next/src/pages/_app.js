// src/pages/_app.js

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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const CosmicBackground = dynamic(() => import("../components/CosmicBackground"), { ssr: false });

// ✅ Module-level — persists for entire browser session, survives all remounts
let hasLoadedOnce = false;

// SiteLayout receives loading state as props from App (which never unmounts)
function SiteLayout({ children, showLoading, loadingComplete, onLoadComplete }) {
  const childWithProps = Children.map(children, (child) =>
    cloneElement(child, { isLoading: !loadingComplete })
  );

  return (
    <>
      <CosmicBackground showFluidCursor={loadingComplete} />
      {showLoading && <LoadingScreen onLoadComplete={onLoadComplete} />}
      {loadingComplete && <Navbar />}
      {childWithProps}
      {loadingComplete && <Footer />}
    </>
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // ✅ Loading state lives in App — survives SiteLayout remounts on navigation
  const isHomePage = router.pathname === "/";
  const shouldLoad = isHomePage && !hasLoadedOnce;
  const [showLoading, setShowLoading] = useState(shouldLoad);
  const [loadingComplete, setLoadingComplete] = useState(!shouldLoad);
  const hideTimeoutRef = useRef(null);

  const handleLoadComplete = () => {
    hasLoadedOnce = true;
    setLoadingComplete(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => setShowLoading(false), 320);
  };

  // Reset scroll to top on every page navigation
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    document.documentElement.classList.add("cursor-native");
  }, []);

  // Case studies define getLayout = (page) => page to bypass SiteLayout
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <SiteLayout
        showLoading={showLoading}
        loadingComplete={loadingComplete}
        onLoadComplete={handleLoadComplete}
      >
        {page}
      </SiteLayout>
    ));

  return getLayout(<Component {...pageProps} />);
}