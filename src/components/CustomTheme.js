import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    typography: {
        fontSize: 16,
        useNextVariants: true,
        fontFamily: ['Roboto', '"Ubuntu"', 'sans-serif'],
        h1: {
            fontWeight: 300,
            fontSize: 42,
        },
        h2: {
            fontWeight: 300,
            fontSize: 30,
        },
        h3: {
            fontWeight: 500,
            fontSize: 22,
        },
        h4: {
            fontWeight: 400,
            fontSize: 20,
        },
        h5: {
            fontWeight: 500,
            fontSize: 16,
        },
        h6: {
            fontWeight: 400,
            fontSize: 16,
        },
    },
});

const CustomTheme = (props) => {
    return <ThemeProvider theme={theme}><CssBaseline />{props.children}</ThemeProvider>
}

export default CustomTheme