import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link to="/" className="logo" onClick={close}>🛺 தமிழ்நாடு <b>Travels</b></Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? '✕' : '☰'}</button>
        <nav className={open ? 'links open' : 'links'}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/destinations" onClick={close}>Destinations</NavLink>
          <NavLink to="/my-bookings" onClick={close}>My Bookings</NavLink>
        </nav>
      </div>
    </header>
  );
}
