import React from 'react'
import { ArticleView, ArticleList } from '../components/ArticleView'
import DriveApi from '../components/DriveAPI'
import Grid from '@material-ui/core/Grid';

const posts = DriveApi.getArticleListing().map((postName) => (DriveApi.getArticle(postName)))
const current = posts[0]

const Articles = () => {
    console.log(current)
    return (<Grid container spacing={3}>
        <Grid item xs={12} md={8}><ArticleView article={current} /></Grid>
        <Grid item xs={12} md={4}><ArticleList articles={posts} /></Grid>
    </Grid>)
}


export default Articles