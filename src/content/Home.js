import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import DriveApi from '../components/DriveAPI'
import MarkdownRenderer from '../components/MarkdownRenderer'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
    },
}));

const Home = () => {
    const classes = useStyles();
    return (<Paper className={classes.paper}>
        <MarkdownRenderer source={DriveApi.getAboutMe().markdown}></MarkdownRenderer>
    </Paper>)
}

export default Home