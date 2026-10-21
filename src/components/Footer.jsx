import { SITE, PHONE, EMAIL } from '../data/destinations';
const col = (t, items) => (
  <div><h3>{t}</h3><ul>{items.map(([l, h]) => <li key={l}><a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{l}</a></li>)}</ul></div>
);
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <img src="https://vl-prod-static.b-cdn.net/system/images/000/885/454/b6ac54c3680992265e965675d4947155/450gt/TRAVIATOR_LOGO.png" alt="Traviator" height="44" loading="lazy" />
          <p><a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
        {col('Tours', [['Bike & Backpacking Tours', `${SITE}/collections/bike-backpacking-tours`], ['International Tours', `${SITE}/collections/international`], ['Domestic Tours', `${SITE}/collections/domestic-tour-collection`], ['All Tours', `${SITE}/collections/tours`]])}
        {col('Company', [['About Us', `${SITE}/about-us`], ['Contact Us', `${SITE}/contact-us`], ['Cancellation Policy', `${SITE}/terms-and-conditions`], ['Privacy Policy', `${SITE}/privacy-policy`], ['Sitemap', `${SITE}/sitemap`]])}
        {col('Follow', [['Facebook', 'https://www.facebook.com/traviator.in/'], ['Instagram', 'https://www.instagram.com/traviator.in']])}
      </div>
      <p className="footer__copy">© 2026, Traviator Adventures & Outdoors</p>
    </footer>
  );
}
