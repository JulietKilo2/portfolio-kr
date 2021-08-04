const data = [
    // data of portfolio projects
    {
        id: 0,
        title: "RTW unit encyclopedia",
        desc: "A compact unit encyclopedia for Rome Total War, a renowned PC game.",
        stacks: ["html5", "css3-alt", "js", "react"],
        imgPath: "./pics/rtw-wiki_preview.png",
        githubUrl: "https://github.com/JulietKilo2/rtw-wiki",
        liveUrl: "https://rtw-wiki.netlify.app/"
    },
    {
        id: 1,
        title: "reactive checklist",
        desc: "A react app that functions as a basic to-do list, utilizing React Hooks.",
        stacks: ["html5", "css3-alt", "js", "react"],
        imgPath: "./pics/reactivelist_preview.png",
        githubUrl: "https://github.com/JulietKilo2/reactive-checklist",
        liveUrl: "https://reactivelist.netlify.app/"
    },
    {
        id: 2,
        title: "moment",
        desc: "A dynamic landing app featuring weather conditions based on user location, random background images and quotes drawn from third-party APIs.",
        stacks: ["html5", "css3-alt", "js"],
        imgPath: "./pics/dynamicLanding_preview.png",
        githubUrl: "https://github.com/JulietKilo2/moment",
        liveUrl: "https://dynamiclanding.netlify.app/"
    },
    {
        id: 3,
        title: "minimal pomodoro",
        desc: "A simplistic and minimalistic pomodoro timer app built with javascript.",
        stacks: ["html5", "css3-alt", "js"],
        imgPath: "./pics/minimalpomodoro_preview.png",
        githubUrl: "https://github.com/JulietKilo2/Minimal-Pomodoro",
        liveUrl: "https://minimalpomodoro.netlify.app/"
    },
    {
        id: 4,
        title: "tropicscape",
        desc: "A mock travel agency webpage that will take you to imaginary tropical adventures.",
        stacks: ["html5", "css3-alt", "sass", "js"],
        imgPath: "./pics/tropicscape_preview.png",
        githubUrl: "https://github.com/JulietKilo2/tropicscape",
        liveUrl: "https://tropicscape.netlify.app/"
    },
    // {
    //     id: 5,
    //     title: "andrew kim",
    //     desc: "A Photograph portfolio website of Andrew Kim.",
    //     stacks: ["html", "css"],
    //     imgPath: "./pics/andrewkim_preview.png",
    //     githubUrl: "",
    //     url: "https://andrewkim.netlify.app/"
    // },
]
const menuContainer = document.querySelector('.menu-container')
const menu = document.querySelector('.menu')
const scrollToTopBtn = document.querySelector('.scroll-up-btn')
const projectsContainer = document.querySelector('.projects-contents')

window.addEventListener('scroll', function () {
    if (window.innerWidth > 500 && window.pageYOffset > 100) {
        menuContainer.classList.add('active')
        menu.classList.add('active')
        scrollToTopBtn.classList.add('scroll-active')
    } else if (window.pageYOffset > 100) {
        menuContainer.classList.add('active')
        menu.classList.add('active')
    }
    else {
        menuContainer.classList.remove('active')
        menu.classList.remove('active')
        scrollToTopBtn.classList.remove('scroll-active')
    }
})

data.forEach((item) => {
    // list out the stacks
    const stacks = item.stacks.map((stack) => {
        // name for each stack
        let name = stack;
        // conditions
        if (stack === 'css3-alt') {
            name = 'css3'
        }
        if (stack === 'js') {
            name = 'javascript'
        }
        return `
        <div class="project-stacks-item">
            <i class="fab fa-${stack}" ></i>
            <p class="project-stacks-name">${name}</p>
        </div>
        `
    }).join('');

    // create innerHTML element for each project
    const element = `
    <div class="project">
        <div class="project-image-wrapper">
            <img src=${item.imgPath} alt=${item.title} />
        </div>
        <div class="project-content-wrapper">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="project-stacks">
                ${stacks}
            </div>
    <div class="project-links">
        <a href=${item.githubUrl} target="_blank">
            <button class="project-github">
                source
            </button>
        </a>
        <a href=${item.liveUrl} target="_blank">
            <button class="project-live">
                live
            </button>
        </a>
    </div>
        </div >
    </div >
    `

    // Append the project to parent element
    projectsContainer.innerHTML += element;
})