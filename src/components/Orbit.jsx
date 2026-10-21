import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import { tours, orbitIds } from '../data/destinations';

const list = orbitIds.map((id) => tours.find((t) => t.id === id));

export default function Orbit() {
  const desktop = useMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
  const [active, setActive] = useState(0);
  const root = useRef();
  const cards = useRef([]);
  useLayoutEffect(() => {
    if (!desktop) return;
    const n = list.length, step = (Math.PI * 2) / n;
    const orbitY = () => {
      const cardHeight = cards.current.find((el) => el)?.offsetHeight || 0;
      return Math.max(0, Math.min(window.innerHeight * 0.2, (window.innerHeight - cardHeight - 40) / 2));
    };
    const place = (p) => cards.current.forEach((el, i) => {
      if (!el) return;
      const th = (i - p) * step, c = Math.cos(th), s = Math.sin(th), k = (c + 1) / 2;
      gsap.set(el, { xPercent: -50, yPercent: -50, x: s * Math.min(window.innerWidth * 0.44, 560), y: c * orbitY(), scale: 0.5 + 0.5 * k, opacity: 0.25 + 0.75 * k, zIndex: Math.round(k * 10) });
    });
    const ctx = gsap.context(() => {
      const st = { p: 0 }; place(0);
      gsap.to(st, { p: n - 1, ease: 'none', onUpdate() { place(st.p); setActive(Math.round(st.p)); }, scrollTrigger: { trigger: root.current, start: 'top top', end: `+=${n * 60}%`, pin: true, scrub: 0.8, invalidateOnRefresh: true } });
    }, root);
    return () => ctx.revert();
  }, [desktop]);
  const a = list[active];

  if (!desktop) {
    return (
      <section className="orbit-m" aria-labelledby="orb-h">
        <h2 id="orb-h" data-reveal>Places we can take you to</h2>
        <p className="muted">Swipe to explore</p>
        <ul className="rail">
          {list.map((t) => (
            <li key={t.id}>
              <a href={t.url} target="_blank" rel="noreferrer" aria-label={`${t.name} in ${t.place}, ${t.nights}`}>
                <img src={t.img} alt={t.name} loading="lazy" width="540" height="720" />
                <span className="rail__shade" aria-hidden="true" />
                <span className="rail__meta">
                  <strong>{t.place}</strong>
                  <span>{t.name}</span>
                  <small>{t.nights}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <section className="orbit" ref={root} aria-labelledby="orb-h">
      <div className="orbit__center" aria-live="polite">
        <h2 id="orb-h" className="sr">Places we can take you to</h2>
        <p className="muted">{a.nights}</p>
        <h3>{a.place}</h3>
        <p className="orbit__name">{a.name}</p>
        <a className="orbit__link" href={a.url} target="_blank" rel="noreferrer">View tour <ArrowUpRight size={18} /></a>
      </div>
      {list.map((t, i) => (
        <a key={t.id} ref={(el) => (cards.current[i] = el)} className={`orbit__card ${i === active ? 'is-on' : ''}`} href={t.url} target="_blank" rel="noreferrer" aria-label={`${t.place}: ${t.name}, ${t.nights}`} tabIndex={i === active ? 0 : -1}>
          <img src={t.img} alt="" loading="lazy" width="540" height="720" />
          <span className="orbit__meta">
            <span className="orbit__place">{t.place}</span>
            <strong>{t.name}</strong>
            <small>{t.nights}</small>
          </span>
        </a>
      ))}
    </section>
  );
}
