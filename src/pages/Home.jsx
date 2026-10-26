import { Link } from 'react-router-dom';
import { destinations, packages, getPackage } from '../data/data.js';
import { DestCard, PackageCard } from '../components/Cards.jsx';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="kicker">வணக்கம்! 🙏</p>
          <h1>Discover the Magic of <span>Tamil Nadu</span></h1>
          <p className="sub">கோவில்கள், கடற்கரை, மலைகள், அருவிகள் – உங்க அடுத்த டிரிப்பை இப்போவே புக் பண்ணுங்க!</p>
          <div className="row gap center">
            <Link className="btn big" to="/destinations">Explore Destinations</Link>
            <Link className="btn big ghost-w" to="/my-bookings">My Bookings</Link>
          </div>
          <div className="stats"><div><b>8+</b>Destinations</div><div><b>8</b>Packages</div><div><b>4.7★</b>Avg Rating</div></div>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="title">🌴 Popular Destinations <small>பிரபலமான இடங்கள்</small></h2>
        <div className="grid">{destinations.slice(0, 4).map((d) => <DestCard key={d.id} d={d} pkg={getPackage(d.id)} />)}</div>
        <div className="center"><Link className="btn ghost" to="/destinations">View All Destinations →</Link></div>
      </section>

      <section className="alt">
        <div className="wrap section">
          <h2 className="title">🎒 Travel Packages <small>சிறப்பு சுற்றுலா தொகுப்புகள்</small></h2>
          <div className="grid">{packages.slice(0, 6).map((p) => <PackageCard key={p.id} p={p} />)}</div>
        </div>
      </section>

      <section className="wrap section">
        <div className="cta">
          <h2>ஊர் சுத்த ரெடியா? 🚌</h2>
          <p>Pick a package, enter traveller details, and get an instant booking confirmation.</p>
          <Link className="btn big" to="/destinations">Book Your Trip</Link>
        </div>
      </section>
    </>
  );
}
