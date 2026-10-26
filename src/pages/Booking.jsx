import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDest, getPackage, money } from '../data/data.js';
import { addBooking } from '../data/storage.js';

const today = () => new Date().toISOString().split('T')[0];

export default function Booking() {
  const { id } = useParams();
  const nav = useNavigate();
  const p = getPackage(id);
  const [f, setF] = useState({ name: '', email: '', phone: '', date: '', adults: 1, children: 0 });
  const [err, setErr] = useState({});

  if (!p) return <div className="wrap empty"><h2>Package not found</h2><Link className="btn" to="/destinations">Back</Link></div>;
  const d = getDest(p.destId);

  const adults = Number(f.adults) || 0;
  const children = Number(f.children) || 0;
  const base = p.price * adults + Math.round(p.price * 0.5 * children);
  const gst = Math.round(base * 0.05);
  const total = base + gst;

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (f.name.trim().length < 3) e.name = 'Enter full name (min 3 letters) – e.g. முருகன், செல்வி';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address';
    if (!/^[6-9]\d{9}$/.test(f.phone)) e.phone = 'Enter a valid 10-digit mobile number';
    if (!f.date) e.date = 'Select travel date';
    else if (f.date < today()) e.date = 'Travel date cannot be in the past';
    if (adults < 1 || adults > 10) e.adults = 'Adults must be between 1 and 10';
    if (children < 0 || children > 10) e.children = 'Children must be between 0 and 10';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    if (Object.keys(e).length) return;
    addBooking({
      id: 'TN' + Date.now().toString().slice(-7), packageId: p.id, title: p.title, place: `${d.ta} (${d.name})`,
      emoji: d.emoji, ...f, name: f.name.trim(), adults, children, total, status: 'Confirmed', bookedOn: new Date().toISOString()
    });
    nav('/my-bookings', { state: { success: true } });
  };

  const field = (k, label, type = 'text', extra = {}) => (
    <label className={err[k] ? 'field bad' : 'field'}>{label}
      <input type={type} value={f[k]} onChange={set(k)} {...extra} />
      {err[k] && <span className="err">{err[k]}</span>}
    </label>
  );

  return (
    <div className="wrap section">
      <h1 className="title">📝 Book Your Trip</h1>
      <div className="detail">
        <form className="form" onSubmit={submit} noValidate>
          {field('name', 'Full Name', 'text', { placeholder: 'e.g. முத்துக்குமார்' })}
          <div className="two">
            {field('email', 'Email', 'email', { placeholder: 'muthu@example.com' })}
            {field('phone', 'Mobile Number', 'tel', { maxLength: 10, placeholder: '9876543210' })}
          </div>
          {field('date', 'Travel Date', 'date', { min: today() })}
          <div className="two">
            {field('adults', 'Adults', 'number', { min: 1, max: 10 })}
            {field('children', 'Children (5–12 yrs)', 'number', { min: 0, max: 10 })}
          </div>
          <button className="btn big full" type="submit">Confirm Booking · {money(total)}</button>
        </form>
        <aside className="side">
          <div className="mini" style={{ background: d.g }}>{d.emoji}</div>
          <h3>{p.title}</h3>
          <p className="muted">📍 {d.ta} · {p.days} Days</p>
          <div className="sum"><span>{adults} Adult × {money(p.price)}</span><b>{money(p.price * adults)}</b></div>
          <div className="sum"><span>{children} Child × {money(Math.round(p.price / 2))}</span><b>{money(Math.round(p.price * 0.5 * children))}</b></div>
          <div className="sum"><span>GST (5%)</span><b>{money(gst)}</b></div>
          <div className="sum total"><span>Total</span><b>{money(total)}</b></div>
        </aside>
      </div>
    </div>
  );
}
