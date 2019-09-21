import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import DriveApi from '../components/DriveAPI'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
    },
}));

const Home = () => {
    const classes = useStyles();
    return (<Paper className={classes.paper}>
        <ReactMarkdown source={DriveApi.getAboutMe()}></ReactMarkdown>
    </Paper>)
}

export default Home