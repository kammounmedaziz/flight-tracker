import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const rawLightTheme = createTheme({
  map: {
    style: 'mapbox://styles/mapbox/light-v10'
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.5,
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB', // Blue 600
      light: '#3B82F6',
      dark: '#1D4ED8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#059669', // Emerald 600
      light: '#10B981',
      dark: '#047857',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC', // Slate 50
      paper: 'rgba(255, 255, 255, 0.95)', // White with transparency
    },
    surface: {
      main: 'rgba(248, 250, 252, 0.8)', // Slate 50 with transparency
      light: 'rgba(241, 245, 249, 0.9)', // Slate 100 with transparency
    },
    command: {
      main: '#7C3AED', // Violet 600
      light: '#8B5CF6',
      dark: '#6D28D9',
    },
    accent: {
      main: '#D97706', // Amber 600
      light: '#F59E0B',
      dark: '#B45309',
    },
    text: {
      primary: 'rgba(15, 23, 42, 0.95)', // Slate 900
      secondary: 'rgba(71, 85, 105, 0.8)', // Slate 600
    },
    divider: 'rgba(148, 163, 184, 0.3)', // Slate 400 with low opacity
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 16px rgba(17, 17, 26, 0.05), 0 8px 24px rgba(17, 17, 26, 0.05), 0 16px 56px rgba(17, 17, 26, 0.05)',
    '0 8px 32px rgba(17, 17, 26, 0.1)',
    '0 12px 40px rgba(17, 17, 26, 0.12)',
    '0 16px 48px rgba(17, 17, 26, 0.15)',
    '0 20px 56px rgba(17, 17, 26, 0.18)',
    '0 24px 64px rgba(17, 17, 26, 0.2)',
    '0 32px 80px rgba(17, 17, 26, 0.22)',
    '0 40px 96px rgba(17, 17, 26, 0.25)',
    '0 48px 112px rgba(17, 17, 26, 0.28)',
    '0 56px 128px rgba(17, 17, 26, 0.3)',
    '0 64px 144px rgba(17, 17, 26, 0.32)',
    '0 72px 160px rgba(17, 17, 26, 0.35)',
    '0 80px 176px rgba(17, 17, 26, 0.38)',
    '0 88px 192px rgba(17, 17, 26, 0.4)',
    '0 96px 208px rgba(17, 17, 26, 0.42)',
    '0 104px 224px rgba(17, 17, 26, 0.45)',
    '0 112px 240px rgba(17, 17, 26, 0.48)'
  ],
});

export const LightTheme = responsiveFontSizes(rawLightTheme);
