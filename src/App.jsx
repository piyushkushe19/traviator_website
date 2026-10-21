import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Orbit from './components/Orbit';
import Explorer from './components/Explorer';
import Editorial from './components/Editorial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.utils.toArray('[data-reveal]').forEach((el) =>
        gsap.from(el, { y: 36, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      );
    });
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const r = () => ScrollTrigger.refresh();
    window.addEventListener('load', r);
    return () => window.removeEventListener('load', r);
  }, []);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><Story /><Orbit /><Explorer /><Editorial /><CallToAction />
      </main>
      <Footer />
    </>
  );
}
