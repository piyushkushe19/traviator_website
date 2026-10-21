import { createTheme } from '@mui/material/styles';
export const C = { ink: '#0c1a22', glacier: '#eef2f3', saffron: '#F9A11B', slate: '#5b6b74' };
export default createTheme({
  palette: { primary: { main: C.saffron, contrastText: C.ink }, text: { primary: C.ink, secondary: C.slate }, background: { default: C.glacier } },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: '"Figtree", system-ui, sans-serif',
    h1: { fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 },
    h2: { fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.05 },
    h3: { fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, letterSpacing: '-0.02em' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 999, padding: '12px 26px', transition: 'transform .25s, background .25s', '&:hover': { transform: 'translateY(-2px)' }, '&:focus-visible': { outline: `3px solid ${C.saffron}`, outlineOffset: 3 } } } },
    MuiToggleButton: { styleOverrides: { root: { border: 0, borderRadius: 999, padding: '8px 20px', color: C.ink, '&.Mui-selected': { background: C.ink, color: '#fff', '&:hover': { background: C.ink } }, '&:focus-visible': { outline: `3px solid ${C.saffron}` } } } },
    MuiDrawer: { styleOverrides: { paper: { background: C.ink, color: '#fff' } } },
    MuiLink: { defaultProps: { underline: 'none' } },
  },
});
