import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const rawDarkTheme = createTheme({
  map: {
    style: 'mapbox://styles/mapbox/dark-v10'
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
    mode: 'dark',
    primary: {
      main: '#3B82F6', // Modern blue
      light: '#60A5FA',
      dark: '#1D4ED8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#10B981', // Emerald
      light: '#34D399',
      dark: '#047857',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0F172A', // Slate 900
      paper: 'rgba(30, 41, 59, 0.95)', // Slate 800 with transparency
    },
    surface: {
      main: 'rgba(51, 65, 85, 0.8)', // Slate 700 with transparency
      light: 'rgba(71, 85, 105, 0.9)', // Slate 600 with transparency
    },
    command: {
      main: '#8B5CF6', // Violet
      light: '#A78BFA',
      dark: '#7C3AED',
    },
    accent: {
      main: '#F59E0B', // Amber
      light: '#FCD34D',
      dark: '#D97706',
    },
    text: {
      primary: 'rgba(248, 250, 252, 0.95)', // Slate 50
      secondary: 'rgba(203, 213, 225, 0.8)', // Slate 300
    },
    divider: 'rgba(100, 116, 139, 0.2)', // Slate 500 with low opacity
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
    '0 4px 16px rgba(17, 17, 26, 0.1), 0 8px 24px rgba(17, 17, 26, 0.1), 0 16px 56px rgba(17, 17, 26, 0.1)',
    '0 8px 32px rgba(17, 17, 26, 0.2)',
    '0 12px 40px rgba(17, 17, 26, 0.25)',
    '0 16px 48px rgba(17, 17, 26, 0.3)',
    '0 20px 56px rgba(17, 17, 26, 0.35)',
    '0 24px 64px rgba(17, 17, 26, 0.4)',
    '0 32px 80px rgba(17, 17, 26, 0.45)',
    '0 40px 96px rgba(17, 17, 26, 0.5)',
    '0 48px 112px rgba(17, 17, 26, 0.55)',
    '0 56px 128px rgba(17, 17, 26, 0.6)',
    '0 64px 144px rgba(17, 17, 26, 0.65)',
    '0 72px 160px rgba(17, 17, 26, 0.7)',
    '0 80px 176px rgba(17, 17, 26, 0.75)',
    '0 88px 192px rgba(17, 17, 26, 0.8)',
    '0 96px 208px rgba(17, 17, 26, 0.85)',
    '0 104px 224px rgba(17, 17, 26, 0.9)',
    '0 112px 240px rgba(17, 17, 26, 0.95)'
  ],
});

export const DarkTheme = responsiveFontSizes(rawDarkTheme);
