import { Link } from 'react-router-dom';
import { getDest, money } from '../data/data.js';

export function DestCard({ d, pkg }) {
  return (
    <article className="card">
      <div className="card-img" style={{ background: d.g }}><span>{d.emoji}</span><em className="tag">{d.region}</em></div>
      <div className="card-body">
        <h3>{d.ta} <small>{d.name}</small></h3>
        <p>{d.desc}</p>
        <div className="row"><span className="star">⭐ {d.rating}</span>{pkg && <b className="price">from {money(pkg.price)}</b>}</div>
        {pkg && <Link className="btn sm" to={`/package/${pkg.id}`}>View Package</Link>}
      </div>
    </article>
  );
}

export function PackageCard({ p }) {
  const d = getDest(p.destId);
  return (
    <article className="card">
      <div className="card-img" style={{ background: d.g }}><span>{d.emoji}</span><em className="tag">{p.days} Days</em></div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p>📍 {d.ta} ({d.name}) · {p.days} days / {p.days - 1} nights</p>
        <div className="row"><b className="price">{money(p.price)} <small>/ adult</small></b><span className="star">⭐ {d.rating}</span></div>
        <div className="row gap"><Link className="btn sm ghost" to={`/package/${p.id}`}>Details</Link><Link className="btn sm" to={`/book/${p.id}`}>Book Now</Link></div>
      </div>
    </article>
  );
}
