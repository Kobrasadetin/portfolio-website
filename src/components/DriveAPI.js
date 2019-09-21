// currently we mock an api for google drive integration, later we want to access files from there

const aboutMe = `
## About me

I'm a full-stack software developer by day, and an aspiring artist, engineer and scientist by night.

### Histories

I started my programming journey as a preschooler in the early 90s, when I got a Commodore 64 personal computer.

I still regret not learning any assembly when growing up. When I got a 386 computer I moved to QBASIC and even
tried my hand in C programming. But without access to internet, learning was a steep uphill battle, and I didn't make
much progress until later.

In senior high school (more specifically it's Finnish counterpart, lukio) I concentrated on arts and music. I made some
tracker tunes with Impulse Tracker, studied photography and painting, and made some esoteric recordings with friends.

After lukio I studied an undergraduate degree in audiovisual communication - this included learning basics of HTML,
JavaScript, ActionScript and CSS. Main focus of the studies was on 3d modeling, but my final year project was a
short(ish) movie with a 50 minute playtime. I also made an isometric game engine with Flash.

At this time, I was also studying neural networks. It was the late 00s and early 10s, and Hinton, Krizhevsky and Sutskever
hadn't yet started the AI renaissance with their paper [ImageNet Classification with Deep Convolutional Neural Networks.]
Programming neural networks was very different from now - there was next to no libraries or even code examples available.
Trying new ideas was a slow but rewarding process. I also studied genetic algorithms. I believed that they would be the
key to finding a good training algorithm. In some way I still do. Even Hinton himself has remarked that he is ["deeply suspicious"
of backpropagation][1], and I share that sentiment.

Having finished my degree, I did freelance work with video projects, print media and websites for varying customers.
I wasn't completely happy with balancing my hobbies and work, and so with some pressure from a friend I applied to
Helsinki University to study Computer Science in 2014.

While studying I have participated in group projects in machine learning, game jams, game programming courses and of course
programmed a lot with Java, which is the perennial programming language in our university. In game projects I have used C# in
Unity 3d, and in machine learning projects I much like to code in Python.

I have always been very bad at showcasing the stuff I do, but I hope this website changes that somewhat.

[1]:https://www.axios.com/artificial-intelligence-pioneer-says-we-need-to-start-over-1513305524-f619efbd-9db0-4947-a9b2-7a4c310a28fe.html
[2]:http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networ
`

const DriveApi = {
    getAboutMe: () => ({ markdown: aboutMe }),
    getArticleListing: () => (['article']),
    getArticle: (article) => ({ markdown: `article by name ${article}`, title: "An article", id: "1" }),
    getProjectListing: () => (['this_website']),
    getProject: (project) => ({ markdown: `project by name ${project}`, title: "This website", id: "1" }),
}

export default DriveApi