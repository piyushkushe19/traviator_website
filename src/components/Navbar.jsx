import { useEffect, useState } from 'react';
import { Drawer, IconButton, Button } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { SITE, PHONE } from '../data/destinations';

export const links = [
  ['Tours', '#tours'], ['Stories', '#stories'], ['About', '#about'],
  ['Blog', `${SITE}/bike-or-backpacking-expedition`], ['Contact', `${SITE}/contact-us`],
];
export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 60);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <a href="#top" className="nav__logo" aria-label="Traviator home">
        <img src="https://vl-prod-static.b-cdn.net/system/images/000/885/454/b6ac54c3680992265e965675d4947155/450gt/TRAVIATOR_LOGO.png" alt="Traviator Adventures & Outdoors" height="40" />
      </a>
      <nav className="nav__links" aria-label="Primary">
        {links.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
      </nav>
      <Button className="nav__cta" variant="contained" href={`tel:${PHONE.replace(/\s/g, '')}`}>Call us</Button>
      <IconButton className="nav__burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} sx={{ color: '#fff' }}>
        {open ? <X /> : <Menu />}
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ id: 'mobile-navigation', className: 'nav__drawer' }}>
        <div className="nav__drawer-head">
          <img src="https://vl-prod-static.b-cdn.net/system/images/000/885/454/b6ac54c3680992265e965675d4947155/450gt/TRAVIATOR_LOGO.png" alt="Traviator Adventures & Outdoors" />
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ color: '#fff' }}><X /></IconButton>
        </div>
        <nav className="drawer" aria-label="Mobile">
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="drawer__call" href={`tel:${PHONE.replace(/\s/g, '')}`} onClick={() => setOpen(false)}>Call us <span aria-hidden="true">↗</span></a>
        </nav>
      </Drawer>
    </header>
  );
}
