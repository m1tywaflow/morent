import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HeaderLog from "./components/HeaderLog";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CarAsortiment from "./pages/CarAsortiment";
import About from "./pages/About";
import RentalRules from "./pages/RentalRules";
import Lenis from "@studio-freight/lenis";
import Contact from "./pages/ContactUs";
import CarDetails from "./pages/CarDetails";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import FavCar from "./pages/FavCar";
import Auth from "./components/Auth";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import Partnership from "./pages/Partnership";
import HowItWorks from "./pages/HowItWorks";
import Events from "./pages/Events";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/";
  return (
    <>
      {!hideLayout && <HeaderLog />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Auth />}  />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rent"
            element={
              <CarAsortiment
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/rental-rules" element={<RentalRules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/fav-car" element={<FavCar />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/events" element={<Events />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
