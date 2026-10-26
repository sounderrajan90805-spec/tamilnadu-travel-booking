import { useMemo, useState } from 'react';
import { destinations, packages, REGIONS, getPackage } from '../data/data.js';
import { DestCard } from '../components/Cards.jsx';

export default function Destinations() {
  const [q, setQ] = useState('');
  const [region, setRegion] = useState('All');
  const [sort, setSort] = useState('popular');

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    let r = destinations.filter((d) =>
      (region === 'All' || d.region === region) &&
      (!t || d.name.toLowerCase().includes(t) || d.ta.includes(q.trim()) || d.desc.toLowerCase().includes(t)));
    const price = (d) => packages.find((p) => p.destId === d.id).price;
    if (sort === 'low') r = [...r].sort((a, b) => price(a) - price(b));
    else if (sort === 'high') r = [...r].sort((a, b) => price(b) - price(a));
    else r = [...r].sort((a, b) => b.rating - a.rating);
    return r;
  }, [q, region, sort]);

  return (
    <div className="wrap section">
      <h1 className="title">🗺️ Destinations <small>இடங்களைத் தேடுங்கள்</small></h1>
      <div className="filters">
        <input type="search" placeholder="Search Madurai, மதுரை, temple..." value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
          <option value="popular">Top Rated</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
      <div className="chips">
        {REGIONS.map((r) => <button key={r} className={r === region ? 'chip on' : 'chip'} onClick={() => setRegion(r)}>{r}</button>)}
      </div>
      <p className="muted">{list.length} destination(s) found</p>
      {list.length ? <div className="grid">{list.map((d) => <DestCard key={d.id} d={d} pkg={getPackage(d.id)} />)}</div>
        : <div className="empty"><h3>😕 No destinations found</h3><button className="btn" onClick={() => { setQ(''); setRegion('All'); }}>Clear filters</button></div>}
    </div>
  );
}
