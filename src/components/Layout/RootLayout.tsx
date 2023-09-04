import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { useEffect, useRef } from "react";

// component
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function RootLayout() {
  const { state } = useNavigation();
  const location = useLocation();
  const locationRef = useRef(location.key);

  useEffect(() => {
    let isMounted = true;

    if (location.key !== locationRef.current) window.scroll(0, 0);

    return () => {
      isMounted = false;
    };
  }, [location]);

  return (
    <>
      <Header />

      <main>{state === "idle" ? <Outlet /> : <h2>Loading...</h2>}</main>

      <Footer />
    </>
  );
}

export default RootLayout;
