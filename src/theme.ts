// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#007bff', // Your primary color
        },
        secondary: {
            main: '#ff4081', // Your secondary color
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
    spacing: 8, // Default spacing
});

export default theme;
