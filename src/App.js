import React from 'react';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Articles from './content/Articles'
import Home from './content/Home'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  console.log(theme)
  return ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      /*justifyContent: 'space-between',*/
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  })
})

const sections = [
  { title: 'About Me', address: "/" },
  { title: 'Projects', address: "/projects" },
  { title: 'Articles', address: "/articles" },
];

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg">

        <Toolbar className={classes.toolbar}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Mikko Karjanmaa
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>

        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link component={RouterLink}
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              to={section.address}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/articles" component={Articles} />
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
