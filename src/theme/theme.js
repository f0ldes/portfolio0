import { createTheme } from "@mui/material";

const boxShadowHandler = (currentTheme) => {
    if (currentTheme.palette.mode === 'light') {
        return {
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 0 0 0 black',
            '&:hover': {
                transform: 'translateY(-4px) translateX(-2px)',
                boxShadow: '5px 5px 0 0 black',
                border: '1px solid black',
            },
            '&:active': {
                transform: 'translateY(2px) translateX(1px)',
                boxShadow: '0 0 0 0 black',
            }, 
        }
    } else {
        return {
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 0 0 0 white',
            '&:hover': {
                transform: 'translateY(-4px) translateX(-2px)',
                boxShadow: '5px 5px 0 0 white',
                border: '0.5px solid white',
            },
            '&:active': {
                transform: 'translateY(2px) translateX(1px)',
                boxShadow: '0 0 0 0 white',
            }, 
        }
    }
};

const scrollHandler = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


const scrollbarStyle = {
    '*::-webkit-scrollbar': {
        width: '0px',
    },
    '*::-webkit-scrollbar-track': {
        background: '#f1f1f1',
    },
    '*::-webkit-scrollbar-thumb': {
        background: '#888',
    },
    '*::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
};

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#F6F4F1',
        },
        secondary: {
            main: '#19857b',
        }, 
        background: {
            default: '#0B090A',
        },
        text: {
            primary: '#FFFDF7'
        }
    }, 
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        secondaryFontFamily: '"Canela"',
        fontSize: 14,
        h1: {
          fontSize: '7rem',
          '@media (max-width:600px)': { 
            fontSize: '1.5rem',
          },
          '@media (max-width:960px)': { 
            fontSize: '2rem',
          },
          fontFamily: '"Canela", "Roboto", "Helvetica", "Arial", sans-serif'
        },

    },
    components: {
        MuiCssBaseline: {
            styleOverrides: scrollbarStyle,
        }
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0B090A',
        },
        secondary: {
            main: '#19857b',
        }, 
        background: {
            default: '#FFFDF7'
        },
        text: {
            primary: '#0B090A'
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        secondaryFontFamily: '"Canela"',
        fontSize: 14,
        h1: {
          fontSize: '7rem',
          '@media (max-width:600px)': { 
            fontSize: '1.5rem',
          },
          '@media (max-width:960px)': { 
            fontSize: '2rem',
          },
          fontFamily: '"Canela", "Roboto", "Helvetica", "Arial", sans-serif'
        },

    },
    components: {
        MuiCssBaseline: {
            styleOverrides: scrollbarStyle,
        },
    },
});



export {
    theme, 
    lightTheme,
    boxShadowHandler, 
    scrollHandler
};

