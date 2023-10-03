/*
RATIO AND SIZES USED FOR PROJECT PICTURES:
- Desktop: 280x350 | 0.8
- Phone:
    --> (540px-800px): 625 | 2.5
    --> (400px-540px): 350x250 | 1.4
    --> (-400px): 300x250 | 1.2

*/

const projects = [
    {
        "projectName" : "Personal File Organization",
        "roleTitle" : "Python",
        "paragraph" : "This is a small project to automatize the clean-up of my Downloads folder. Recognizing discernible patterns, I created a solution that would automatically organize my most downloaded files into their designated folders. Any action will be kept tracked off in a text file.",
        "imageUrl" : {
            "desktop" : "project-file-organization-desktop.jpg",
            "phone800" : "project-file-organization-phone-all.jpg",
            "phone500" : "project-file-organization-phone-all.jpg",
            "phone400" : "project-file-organization-phone-all.jpg"
        },
        "projectURL" : "https://github.com/claraz4/Personal-File-Organization"
    },
    {
        "projectName" : "Tic Tac Toe",
        "roleTitle" : "React, JavaScript, HTML, CSS",
        "paragraph" : "This marks my official debut into front-end development with React. After months of crafting console-based games, I decided to create an interactive Tic Tac Toe game for web browsers. In this game, you'll have the opportunity to challenge your friends to several rounds of the classic Tic Tac Toe.",
        "imageUrl" : {
            "desktop" : "tic-tac-toe-desktop.jpg",
            "phone800" : "tic-tac-toe-phone-800.jpg",
            "phone500" : "tic-tac-toe-phone-800.jpg",
            "phone400" : "tic-tac-toe-phone-400.jpg"
        },
        "projectURL" : "https://github.com/claraz4/Tic-Tac-Toe"
    }
];

export default projects;