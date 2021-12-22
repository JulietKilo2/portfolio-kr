const data = [
  // data of portfolio projects
  {
    id: 0,
    title: "Rest Countries API",
    desc: "세계의 여러 나라들에대한 정보를 담고있는 REST Countries API를 사용하여 각 국의 여러 정보들을 보여주는 사이트 입니다.",
    stacks: ["html5", "css3-alt", "js", "react"],
    imgPath: "./pics/rest-countries-preview.png",
    githubUrl: "https://github.com/JulietKilo2/rest-countries",
    liveUrl: "https://rest-countries-jk.netlify.app/",
  },
  {
    id: 1,
    title: "momentwo",
    desc: "크롬 익스텐션 모멘트의 일부 기능을 구현한 프로젝트 입니다.<br/> 다양한 외부 API 소스들을 끌어다와 유명 인용구들, 사용자 위치에 따른 날씨정보, 그리고 랜덤한 배경 이미지를 화면에 전달하였습니다.<br/> 기존에 바닐라 자바스트립트로 만들었던 프로젝트를 리액트로 새로 재구성하였습니다.",
    stacks: ["html5", "css3-alt", "js", "react"],
    imgPath: "./pics/dynamicLanding_preview.png",
    githubUrl: "https://github.com/JulietKilo2/moment2.0",
    liveUrl: "https://momentwo.netlify.app/",
  },
  {
    id: 2,
    title: "토탈워: 로마 유닛 사전",
    desc: "PC게임 토탈워: 로마의 모든 유닛들을 정리한 웹앱입니다.",
    stacks: ["html5", "css3-alt", "js", "react"],
    imgPath: "./pics/rtw-wiki_preview.png",
    githubUrl: "https://github.com/JulietKilo2/rtw-wiki",
    liveUrl: "https://rtw-wiki.netlify.app/",
  },
  {
    id: 3,
    title: "유튜브 클론",
    desc: "유튜브의 일부 기능 (서칭과 영상 재생)을 리액트 기반으로 재구현 하였습니다. 스타일링에는 PostCSS를 활용하였습니다.",
    stacks: ["react", "css3-alt"],
    imgPath: "./pics/youtube-clone-preview.png",
    githubUrl: "https://github.com/JulietKilo2/react-youtube-clone",
    liveUrl: "https://devsub-youtube-clone.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "minimal pomodoro",
  //   desc: "심플하고 간결한 포모도로 타이머 입니다.",
  //   stacks: ["html5", "css3-alt", "js"],
  //   imgPath: "./pics/minimalpomodoro_preview.png",
  //   githubUrl: "https://github.com/JulietKilo2/Minimal-Pomodoro",
  //   liveUrl: "https://minimalpomodoro.netlify.app/",
  // },
  // {
  //   id: 4,
  //   title: "tropicscape",
  //   desc: "A mock travel agency webpage that will take you to imaginary tropical adventures.",
  //   stacks: ["html5", "css3-alt", "sass", "js"],
  //   imgPath: "./pics/tropicscape_preview.png",
  //   githubUrl: "https://github.com/JulietKilo2/tropicscape",
  //   liveUrl: "https://tropicscape.netlify.app/",
  // },
  // {
  //     id: 5,
  //     title: "andrew kim",
  //     desc: "A Photograph portfolio website of Andrew Kim.",
  //     stacks: ["html", "css"],
  //     imgPath: "./pics/andrewkim_preview.png",
  //     githubUrl: "",
  //     url: "https://andrewkim.netlify.app/"
  // },
  // {
  //   id: 6,
  //   title: "리액티브 체크리스트",
  //   desc: "리액트 훅을 이용한 간단한 체크리스트입니다.",
  //   stacks: ["html5", "css3-alt", "js", "react"],
  //   imgPath: "./pics/reactivelist_preview.png",
  //   githubUrl: "https://github.com/JulietKilo2/reactive-checklist",
  //   liveUrl: "https://reactivelist.netlify.app/",
  // },
];

const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector(".menu");
const scrollToTopBtn = document.querySelector(".scroll-up-btn");
const projectsContainer = document.querySelector(".projects-contents");

window.addEventListener("scroll", function () {
  if (window.innerWidth > 500 && window.pageYOffset > 100) {
    menuContainer.classList.add("active");
    menu.classList.add("active");
    scrollToTopBtn.classList.add("scroll-active");
  } else if (window.pageYOffset > 100) {
    menuContainer.classList.add("active");
    menu.classList.add("active");
  } else {
    menuContainer.classList.remove("active");
    menu.classList.remove("active");
    scrollToTopBtn.classList.remove("scroll-active");
  }
});

data.forEach((item) => {
  // list out the stacks
  const stacks = item.stacks
    .map((stack) => {
      // name for each stack
      let name = stack;
      // conditions
      if (stack === "css3-alt") {
        name = "css3";
      }
      if (stack === "js") {
        name = "javascript";
      }
      return `
        <div class="project-stacks-item">
            <i class="fab fa-${stack}" ></i>
            <p class="project-stacks-name">${name}</p>
        </div>
        `;
    })
    .join("");

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
                소스코드
            </button>
        </a>
        <a href=${item.liveUrl} target="_blank">
            <button class="project-live">
                라이브데모
            </button>
        </a>
    </div>
        </div >
    </div >
    `;

  // Append the project to parent element
  projectsContainer.innerHTML += element;
});
