import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { about } from '../data/destinations';
export default function Editorial() {
  const root = useRef();
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.editorial__image').forEach((img) => {
        gsap.fromTo(img,
          { clipPath: 'inset(0 0 12% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 1.15, ease: 'power3.out',
            scrollTrigger: { trigger: img, start: 'top 88%', once: true } }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="editorial" aria-labelledby="ab-h" ref={root}>
      <div className="editorial__text">
        <h2 id="ab-h" data-reveal>Who we are</h2>
        <p data-reveal>{about.p1}</p>
        <p data-reveal>{about.p2}</p>
      </div>
      <figure className="editorial__big" data-reveal><img className="editorial__image" src={about.img1} alt="Traviator travellers on a mountain trip" loading="lazy" width="1200" height="900" /></figure>
     
    </section>
  );
}
