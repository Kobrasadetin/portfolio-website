const aboutMe = `
# Title

Text

## About me

I'm a full-stack software developer by day, an aspiring artist, engineer and scientist by night.

### Third

Hello

#### Level H4

still large

##### Level H5

sasdas

###### Level H6

text


`

// mock api for google drive integration
const DriveApi = {
    getAboutMe: () => (aboutMe),
    getArticleListing: () => ('article'),
    getArticle: (article) => (`article by name ${article}`)
}

export default DriveApi