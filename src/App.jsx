import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Destinations from './pages/Destinations.jsx';
import PackageDetails from './pages/PackageDetails.jsx';
import Booking from './pages/Booking.jsx';
import MyBookings from './pages/MyBookings.jsx';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route
            path="*"
            element={
              <div className="wrap empty">
                <h2>404 – Page not found</h2>
                <Link className="btn" to="/">Go Home</Link>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}