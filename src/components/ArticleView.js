import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import MarkdownRenderer from '../components/MarkdownRenderer'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
    },
}));

const ArticleView = ({ article }) => {
    const classes = useStyles();
    return (<Paper className={classes.paper}>
        <MarkdownRenderer source={article.markdown}></MarkdownRenderer>
    </Paper>)
}

const ArticleList = ({ articles }) => {
    const classes = useStyles();
    console.log(articles)
    return (articles.map((article) => <Paper className={classes.paper} key={article.id}>
        <MarkdownRenderer source={article.title}></MarkdownRenderer>
    </Paper>))
}

export { ArticleView, ArticleList }