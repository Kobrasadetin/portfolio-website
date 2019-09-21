import React from 'react'
import DriveApi from '../components/DriveAPI'
import { ArticleView } from '../components/ArticleView'

const Home = () => {
    return (<ArticleView article={DriveApi.getAboutMe()} />)
}

export default Home