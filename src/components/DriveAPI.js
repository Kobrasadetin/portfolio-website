const aboutMe = `
# About me

I'm a full-stack software developer by day, an aspiring artist, engineer and scientist by night.

`

// mock api for google drive integration
const DriveApi = {
    getAboutMe: () => (aboutMe),
    getArticleListing: () => ('article'),
    getArticle: (article) => (`article by name ${article}`)
}

export default DriveApi