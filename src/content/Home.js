import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import DriveApi from '../components/DriveAPI'
import { inspect } from 'util'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
    },
}));

function getCoreProps(props) {
    return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {}
}

const customRenderer = (a, b, c, d) => (`${inspect(a)} / ${inspect(b)} / ${a.level} / ${inspect(a.children[0].props)}`);

const origHeader = (props) => (React.createElement(`h${props.level}`, getCoreProps(props), props.children))

const customHeader = (props) => <Typography variant={`h${props.level}`}>{props.children}</Typography>

const renderers = { 'heading': customHeader }

const Home = () => {
    const classes = useStyles();
    return (<Paper className={classes.paper}>
        <ReactMarkdown renderers={renderers} source={DriveApi.getAboutMe()}></ReactMarkdown>
    </Paper>)
}

export default Home