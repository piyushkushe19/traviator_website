import { useEffect, useState } from 'react';
export default function useMedia(query) {
  const [m, setM] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const l = window.matchMedia(query);
    const f = () => setM(l.matches);
    f(); l.addEventListener('change', f);
    return () => l.removeEventListener('change', f);
  }, [query]);
  return m;
}
