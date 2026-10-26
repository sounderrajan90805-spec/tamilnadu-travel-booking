import { Link, useParams } from 'react-router-dom';
import { getDest, getPackage, money } from '../data/data.js';

export default function PackageDetails() {
  const { id } = useParams();
  const p = getPackage(id);
  if (!p) return <div className="wrap empty"><h2>Package not found</h2><Link className="btn" to="/destinations">Back</Link></div>;
  const d = getDest(p.destId);
  return (
    <>
      <section className="banner" style={{ background: d.g }}>
        <div className="wrap"><span className="big-emoji">{d.emoji}</span><h1>{p.title}</h1><p>📍 {d.ta} ({d.name}) · {p.days} Days / {p.days - 1} Nights · ⭐ {d.rating}</p></div>
      </section>
      <div className="wrap section detail">
        <div>
          <h2 className="title">About this trip</h2>
          <p>{d.desc}</p>
          <h2 className="title">🗓️ Itinerary</h2>
          <ol className="timeline">{p.itinerary.map((t, i) => <li key={i}><b>Day {i + 1}</b><span>{t}</span></li>)}</ol>
          <h2 className="title">✅ Package Includes</h2>
          <ul className="inc">{p.includes.map((i) => <li key={i}>✔ {i}</li>)}</ul>
        </div>
        <aside className="side">
          <small>Starting from</small>
          <div className="price big">{money(p.price)}</div>
          <small>per adult · children pay 50%</small>
          <Link className="btn big full" to={`/book/${p.id}`}>Book This Package</Link>
          <Link className="btn ghost full" to="/destinations">← Back to destinations</Link>
        </aside>
      </div>
    </>
  );
}
