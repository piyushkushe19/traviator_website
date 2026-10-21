import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useMedia from '../hooks/useMedia';
import { chapters } from '../data/destinations';

export default function Story() {
  const pinned = useMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)');
  const root = useRef();
  useLayoutEffect(() => {
    if (!pinned) return;
    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray('.st-img'), txt = gsap.utils.toArray('.st-txt');
      gsap.set(imgs.slice(1), { opacity: 0 });
      gsap.set(txt.slice(1), { autoAlpha: 0, y: 40 });
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: root.current, start: 'top top', end: `+=${chapters.length * 70}%`, pin: true, scrub: 0.6, anticipatePin: 1 } });
      imgs.forEach((im, i) => {
        tl.fromTo(im, { scale: 1.15 }, { scale: 1, duration: 1.4 }, Math.max(i - 0.5, 0));
        if (i === 0) return;
        tl.to(txt[i - 1], { autoAlpha: 0, y: -40, duration: 0.3 }, i - 0.5)
          .to(im, { opacity: 1, duration: 0.5 }, i - 0.5)
          .fromTo(txt[i], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.4 }, i - 0.2);
      });
      tl.to({}, { duration: 0.4 });
    }, root);
    return () => ctx.revert();
  }, [pinned]);

  if (!pinned) {
    return (
      <section id="stories" className="story-stack" aria-labelledby="st-h" style={{ '--story-count': chapters.length }}>
        <h2 id="st-h" data-reveal>Real traveller stories</h2>
        {chapters.map((c, i) => (
          <article key={c.title} data-reveal style={{ '--story-index': i, '--story-top': `calc(env(safe-area-inset-top) + var(--nav) + 14px + ${i * 10}px)` }}>
            <img src={c.img} alt={`${c.title} with Traviator`} loading="lazy" width="1200" height="800" />
            <div className="story-stack__copy">
              <p className="muted">{c.place}</p><h3>{c.title}</h3><p>{c.text}</p>
            </div>
          </article>
        ))}
      </section>
    );
  }
  return (
    <section id="stories" className="story" ref={root} aria-label="Traviator journeys">
      {chapters.map((c, i) => <img key={c.title} className="st-img" src={c.img} alt={`${c.title} with Traviator`} loading={i ? 'lazy' : 'eager'} />)}
      <div className="story__shade" />
      <div className="story__txts">
        {chapters.map((c) => (
          <div key={c.title} className="st-txt">
            <p className="story__place">{c.place}</p>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
