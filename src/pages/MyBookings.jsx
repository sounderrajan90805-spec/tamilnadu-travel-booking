import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBookings, removeBooking } from '../data/storage.js';
import { money } from '../data/data.js';

export default function MyBookings() {
  const [list, setList] = useState(getBookings);
  const { state } = useLocation();
  const cancel = (id) => { if (window.confirm('Cancel this booking?')) setList(removeBooking(id)); };

  return (
    <div className="wrap section">
      <h1 className="title">🎫 My Bookings <small>என் டிக்கெட்டுகள்</small></h1>
      {state?.success && <div className="ok">🎉 Booking confirmed! நன்றி – இனிய பயணம் அமையட்டும்!</div>}
      {!list.length ? (
        <div className="empty"><h3>No bookings yet 🧳</h3><p>Pick a destination and book your first trip.</p><Link className="btn" to="/destinations">Explore Destinations</Link></div>
      ) : (
        <div className="bk-list">
          {list.map((b) => (
            <article className="bk" key={b.id}>
              <div className="bk-ico">{b.emoji}</div>
              <div className="bk-info">
                <h3>{b.title}</h3>
                <p>📍 {b.place}</p>
                <p>👤 {b.name} · 📞 {b.phone}</p>
                <p>📅 {new Date(b.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · 👥 {b.adults} Adult, {b.children} Child</p>
                <small className="muted">Booking ID: {b.id}</small>
              </div>
              <div className="bk-side">
                <span className="badge">{b.status}</span>
                <b className="price">{money(b.total)}</b>
                <button className="btn sm danger" onClick={() => cancel(b.id)}>Cancel</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
