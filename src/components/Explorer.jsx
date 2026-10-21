import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import { tours, filters, collections } from '../data/destinations';

function TourCard({ t }) {
  return (
    <li className="tcard">
      <a href={t.url} target="_blank" rel="noreferrer">
        <div className="tcard__img"><img src={t.img} alt={t.name} loading="lazy" width="540" height="405" /></div>
        <p className="muted">{t.nights} · {t.place}</p>
        <h3>{t.name}</h3>
        <p className="tcard__price">{t.price ? `From ${t.price}` : 'View details'}</p>
      </a>
    </li>
  );
}
export default function Explorer() {
  const [f, setF] = useState('all');
  const grid = useRef();
  const shown = f === 'all' ? tours : tours.filter((t) => t.cats.includes(f));
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        gsap.from('.tcard', { y: 24, opacity: 0, duration: 0.5, stagger: 0.04, ease: 'power2.out' });
      ScrollTrigger.refresh();
    }, grid);
    return () => ctx.revert();
  }, [f]);
  return (
    <section id="tours" className="explorer" aria-labelledby="ex-h">
      <div className="explorer__head">
        <h2 id="ex-h" data-reveal>Find your route</h2>
        <ToggleButtonGroup exclusive value={f} onChange={(_, v) => v && setF(v)} aria-label="Filter tours" className="filters">
          {filters.map(([k, l]) => <ToggleButton key={k} value={k}>{l}</ToggleButton>)}
        </ToggleButtonGroup>
      </div>
      <ul className="tgrid" ref={grid}>{shown.map((t) => <TourCard key={t.id} t={t} />)}</ul>
      <Button variant="contained" href={collections[f]} target="_blank" rel="noreferrer" className="explorer__more">See the full collection</Button>
    </section>
  );
}
