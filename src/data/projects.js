/*
RATIO AND SIZES USED FOR PROJECT PICTURES:
- Desktop: 280x350 | 0.8
- Phone:
    --> (540px-800px): 625x250 | 2.5  --> 799px: 760x250
    --> (400px-540px): 350x250 | 1.4
    --> (-400px): 300x250 | 1.2

*/

const projects = [
    {
        "projectName" : "Meme Generator",
        "roleTitle" : "React, JavaScript, HTML, CSS",
        "paragraph" : "I created this meme generator during my introductory React course at Scrimba, where I learned to work with online APIs and build dynamic websites. It represents my early experiences in React and highlights my ability to craft interactive web applications.",
        "imageUrl" : {
            "desktop" : "meme-generator/meme-generator-desktop.jpg",
            "phone800" : "meme-generator/meme-generator-phone-800.jpg",
            "phone500" : "meme-generator/meme-generator-phone-800.jpg",
            "phone400" : "meme-generator/meme-generator-phone-800.jpg"
        },
        "justifyCenter" : true,
        "projectURL" : "https://github.com/claraz4/Meme-Generator"
    },
    {
        "projectName" : "Trivia Quiz",
        "roleTitle" : "React, JavaScript, HTML, CSS",
        "paragraph" : "Utilizing the Trivia API, my trivia quiz project became a fun way to boost my general knowledge and enhance my web development skills. It offers a diverse range of over 20 categories for players to enjoy, and its responsive design ensures accessibility across all devices.",
        "imageUrl" : {
            "desktop" : "trivia/trivia-quiz-desktop.jpg",
            "phone800" : "trivia/trivia-quiz-phone-800.jpg",
            "phone500" : "trivia/trivia-quiz-phone-800.jpg",
            "phone400" : "trivia/trivia-quiz-phone-400.jpg"
        },
        "justifyCenter" : true,
        "projectURL" : "https://github.com/claraz4/Trivia-Quiz"
    },
    {
        "projectName" : "Personal File Organization",
        "roleTitle" : "Python",
        "paragraph" : "This is a small project to automatize the clean-up of my Downloads folder. Recognizing discernible patterns, I created a solution that would automatically organize my most downloaded files into their designated folders. Any action will be kept tracked off in a text file.",
        "imageUrl" : {
            "desktop" : "file-organization/project-file-organization-desktop.jpg",
            "phone800" : "file-organization/project-file-organization-phone-all.jpg",
            "phone500" : "file-organization/project-file-organization-phone-all.jpg",
            "phone400" : "file-organization/project-file-organization-phone-all.jpg"
        },
        "justifyCenter" : false,
        "projectURL" : "https://github.com/claraz4/Personal-File-Organization"
    },
    {
        "projectName" : "Tic Tac Toe",
        "roleTitle" : "React, JavaScript, HTML, CSS",
        "paragraph" : "This marks my official debut into front-end development with React. After months of crafting console-based games, I decided to create an interactive Tic Tac Toe game for web browsers. In this game, you'll have the opportunity to challenge your friends to several rounds of the classic Tic Tac Toe.",
        "imageUrl" : {
            "desktop" : "tic-tac-toe/tic-tac-toe-desktop.jpg",
            "phone800" : "tic-tac-toe/tic-tac-toe-phone-800.jpg",
            "phone500" : "tic-tac-toe/tic-tac-toe-phone-800.jpg",
            "phone400" : "tic-tac-toe/tic-tac-toe-phone-800.jpg"
        },
        "justifyCenter" : false,
        "projectURL" : "https://github.com/claraz4/Tic-Tac-Toe"
    }
];

export default projects;