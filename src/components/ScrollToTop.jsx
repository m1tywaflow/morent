import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();
    lenis.stop(); // Останавливаем Lenis перед сбросом скролла

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    setTimeout(() => {
      lenis.start(); // Запускаем Lenis после перехода
    }, 300);
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
