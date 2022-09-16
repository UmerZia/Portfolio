// Hamburger functionality
const hamburgerIcon = document.getElementById('hamburger');
const crossIcon = document.getElementById('cross-icon');
const navLinks = document.getElementsByClassName('navbar__desktop-icon');

hamburgerIcon.addEventListener('click', () => {
    document.getElementsByClassName('navbar__content')[0].classList.add('display-flex');
    hamburgerIcon.classList.add('display-none');
});

crossIcon.addEventListener('click', () => {
    document.getElementsByClassName('navbar__content')[0].classList.remove('display-flex');
    hamburgerIcon.classList.remove('display-none');
});

[...navLinks].forEach((navLink) => {
    navLink.addEventListener('click', () => {
        document.getElementsByClassName('navbar__content')[0].classList.remove('display-flex');
    });
});

// Close Hamburger if user switch to desktop version
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        document.getElementsByClassName('navbar__content')[0].classList.remove('display-flex');
    }
});

// Card Objects
let projects = {
    mainCard: {
        name: 'Multi-Post Stories',
        desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        popUp_desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        img: "img/cards/main-card.svg",
        tech: ['css', 'html', 'bootstrap', 'Ruby'],
        live: '#',
        source: '#',
    },
    subCards: [
        {
            id: 1,
            name: 'Data Dashboard Healthcare',
            desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
            popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
            tech: ['HTML', 'BootStrap', 'Ruby'],
            live: '#',
            source: '#',
        },
        {
            id: 2,
            name: 'Data Dashboard Healthcare',
            desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
            popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
            tech: ['HTML', 'BootStrap', 'Ruby'],
            live: '#',
            source: '#',
        },
        {
            id: 3,
            name: 'Data Dashboard Healthcare',
            desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
            popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
            tech: ['HTML', 'BootStrap', 'Ruby'],
            live: '#',
            source: '#',
        },
        {
            id: 4,
            name: 'Data Dashboard Healthcare',
            desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
            popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
            tech: ['HTML', 'BootStrap', 'Ruby'],
            live: '#',
            source: '#',
        },
        {
            id: 5,
            name: 'Data Dashboard Healthcare',
            desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
            popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
            tech: ['HTML', 'BootStrap', 'Ruby'],
            live: '#',
            source: '#',
        },
        {
            id: 6,
            name: 'Data Dashboard Healthcare',
            desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
            popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
            tech: ['HTML', 'BootStrap', 'Ruby'],
            live: '#',
            source: '#',
        },
    ]
}

// Dynamic card section
let cardSection = `<div class="work__header">
      <h2 class="work__title">My Recent Works</h2>
      <div class="line line-black"></div>
    </div>`
cardSection += `
    <div class="work__mainCard" aria-label="Main Card">
      <img id="poster" src="${projects.mainCard.img}" alt="Exercise Poster" aria-labelledby="main-card-title" />
      <div class="work__mainCard__content">
        <h2 class="work__mainCard--heading" id="main-card-title">
          ${projects.mainCard.name}
        </h2>
        <p class="work__mainCard--desc">
          ${projects.mainCard.desc}
        </p>
        <ul class="work__mainCard__tech">`
    projects.mainCard.tech.forEach(x => {
        cardSection += `
        <li class="mainCard__tech-name">
            <a class="tech-name-black" href="#">${projects.mainCard.tech}</a>
          </li>`
    })
        cardSection += `</ul>
        <button class="mainCard--btn btn">See Project</button>
      </div>
    </div>
<div class="work__grid">`

projects.subCards.forEach(card => {
    cardSection += `
            <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h1 class="work__subCard--heading">
            ${card.name}
          </h1>
          <p class="work__subCard--decs">
            ${card.desc}
          </p>
          <ul class="work__subCard__tech">`
        card.tech.forEach(x => {
            cardSection += `
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">${x}</a>
            </li>`
        })
            cardSection += `</ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>`
})
cardSection += `</div>`
document.getElementById("work__main").insertAdjacentHTML("afterbegin", cardSection);