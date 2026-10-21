import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@mui/material';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { HERO, SITE } from '../data/destinations';

export default function Hero() {
  const root = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .fromTo('.hero__img', { scale: 1.12, opacity: 0.45 }, { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' })
        .fromTo('.hero__shade', { opacity: 0.35 }, { opacity: 1, duration: 1.1 }, '-=1.25')
        .from('.hero__eyebrow', { opacity: 0, y: 12, duration: 0.65 }, '-=0.95')
        .from('.hero__line', { yPercent: 110, duration: 1.1, stagger: 0.14, ease: 'power4.out' }, '-=0.6')
        .from('.hero__sub', { opacity: 0, y: 18, duration: 0.75 }, '-=0.55')
        .from('.hero__actions', { opacity: 0, y: 16, duration: 0.7 }, '-=0.48')
        .from('.hero__scroll', { opacity: 0, y: 8, duration: 0.55 }, '-=0.4');

      gsap.to('.hero__img', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 0.6 },
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section id="top" className="hero" ref={root}>
      <img className="hero__img" src={HERO} alt="Riders crossing a Himalayan landscape with Traviator" fetchPriority="high" width="1600" height="720" />
      <div className="hero__shade" />
      <div className="hero__body">
        <p className="hero__eyebrow"><span aria-hidden="true" /> Himalayan adventures · since 2016</p>
        <h1>
          <span className="mask"><span className="hero__line">Be a Traviator,</span></span>
          <span className="mask"><span className="hero__line">we’ll be your <em>Navigator</em></span></span>
        </h1>
        <p className="hero__sub">Backpacking trips, Ladakh bike expeditions, Spiti Valley tours and Himalayan road trips since 2016.</p>
        <div className="hero__actions">
          <Button className="hero__primary" variant="contained" size="large" href="#tours">Explore tours <ArrowRight size={17} aria-hidden="true" /></Button>
          <Button variant="outlined" size="large" href={`${SITE}/collections`} sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.6)' }}>View all collections</Button>
        </div>
      </div>
      <a href="#stories" className="hero__scroll" aria-label="Scroll to stories"><ArrowDown size={20} /></a>
    </section>
  );
}
