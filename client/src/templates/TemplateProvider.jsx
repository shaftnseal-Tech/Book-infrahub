import React, { createContext, useState } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

// Create context
const TemplateContext = createContext(null);

export const TemplateProvider = ({ children }) => {
    const theme = createTheme();

    // Optional: You can add state or functions that you want to provide to children components
    const [state, setState] = useState({});

    return (
        <TemplateContext.Provider value={{ state, setState }}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        </TemplateContext.Provider>
    );
};

export default TemplateProvider;
