import { Button } from '@mui/material';
import { about, WHATSAPP, SITE } from '../data/destinations';
export default function CallToAction() {
  return (
    <section className="cta" style={{ backgroundImage: `linear-gradient(rgba(12,26,34,.55),rgba(12,26,34,.75)), url(${about.cta})` }} aria-labelledby="cta-h">
      <h2 id="cta-h" data-reveal>Be a Traviator, we’ll be your Navigator</h2>
      <p data-reveal>Tell us where you want to go. We reply on WhatsApp.</p>
      <div className="cta__actions" data-reveal>
        <Button variant="contained" size="large" href={WHATSAPP} target="_blank" rel="noreferrer">Chat on WhatsApp</Button>
        <Button variant="outlined" size="large" href={`${SITE}/contact-us`} target="_blank" rel="noreferrer" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.6)' }}>Contact us</Button>
      </div>
    </section>
  );
}
