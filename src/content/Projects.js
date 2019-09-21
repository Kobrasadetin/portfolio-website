import React from 'react'
import { ArticleView, ArticleList } from '../components/ArticleView'
import DriveApi from '../components/DriveAPI'
import Grid from '@material-ui/core/Grid';

const projects = DriveApi.getProjectListing().map((projectName) => (DriveApi.getProject(projectName)))
const current = projects[0]

const Projects = () => {
    console.log(current)
    return (<Grid container spacing={3}>
        <Grid item xs={12} md={8}><ArticleView article={current} /></Grid>
        <Grid item xs={12} md={4}><ArticleList articles={projects} /></Grid>
    </Grid>)
}


export default Projects