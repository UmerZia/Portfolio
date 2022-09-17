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
const projects = {
  mainCard: {
    name: 'Multi-Post Stories',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    popUp_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    img: 'img/cards/main-card.svg',
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    live: '#',
    source: 'https://github.com/UmerZia/Portfolio',
  },
  subCards: [
    {
      id: 1,
      name: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      tech: ['HTML', 'BootStrap', 'Ruby'],
      img: '../img/cards/popUp-img.png',
      live: '#',
      source: 'https://github.com/UmerZia/Portfolio',
    },
    {
      id: 2,
      name: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      tech: ['JS', 'React', 'TypeScript'],
      img: '../img/cards/popUp-img.png',
      live: '#',
      source: 'https://github.com/UmerZia/Portfolio',
    },
    {
      id: 3,
      name: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      tech: ['Git', 'GitHub', 'GitPage'],
      img: '../img/cards/popUp-img.png',
      live: '#',
      source: 'https://github.com/UmerZia/Portfolio',
    },
    {
      id: 4,
      name: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      tech: ['TailWind', 'BS', 'ROR'],
      img: '../img/cards/popUp-img.png',
      live: '#',
      source: 'https://github.com/UmerZia/Portfolio',
    },
    {
      id: 5,
      name: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      tech: ['HTML5', 'BS', 'ROR'],
      img: '../img/cards/popUp-img.png',
      live: '#',
      source: 'https://github.com/UmerZia/Portfolio',
    },
    {
      id: 6,
      name: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUp_desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      tech: ['C++', 'Java', 'C#'],
      img: '../img/cards/popUp-img.png',
      live: '#',
      source: 'https://github.com/UmerZia/Portfolio',
    },
  ],
};

// Dynamic card section
let cardSection = `<div class="work__header">
      <h2 class="work__title">My Recent Works</h2>
      <div class="line line-black"></div>
    </div>`;
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
        <ul class="work__mainCard__tech">`;
projects.mainCard.tech.forEach((x) => {
  cardSection += `
        <li class="mainCard__tech-name">
            <a class="tech-name-black" href="#">${x}</a>
          </li>`;
});
cardSection += `</ul>
        <button class="mainCard--btn btn">See Project</button>
      </div>
    </div>
<div class="work__grid">`;

projects.subCards.forEach((card) => {
  cardSection += `
            <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h1 class="work__subCard--heading">
            ${card.name}
          </h1>
          <p class="work__subCard--decs">
            ${card.desc}
          </p>
          <ul class="work__subCard__tech">`;
  card.tech.forEach((x) => {
    cardSection += `
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">${x}</a>
            </li>`;
  });
  cardSection += `</ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>`;
});
cardSection += '</div>';
document.getElementById('work__main').insertAdjacentHTML('afterbegin', cardSection);

// Dynamic Modal
const modal = [];
const seeProjectBtn = document.getElementsByClassName('subCard--btn');
[...seeProjectBtn].forEach((seeProject, index) => {
  modal[index] = `<section class="popup__section">
  <div class="popup">
    <div class="popup__head">
      <div class="popup__head__title">
        <p>${projects.subCards[index].name}</p>
        <img class="popup__head--cross" src="../img/icons/cross-icon.svg" alt="Close" />
      </div>
      <div class="popup__head__techs">
        <ul class="popup__head__techs--list">
          <li class="popup__head__techs--listItems">${projects.subCards[index].tech[0]}</li>
          <li class="popup__head__techs--listItems">${projects.subCards[index].tech[1]}</li>
          <li class="popup__head__techs--listItems">${projects.subCards[index].tech[2]}</li>
        </ul>
      </div>
    </div>
    <div class="popup__body">
      <div class="popup__body--img"><img class="popup__body--img" src=${projects.subCards[index].img}></div>
      <div class="popup__body--content">
        <p>${projects.subCards[index].popUp_desc}</p>
        <div class="popup__body__btn">
          <button class="btn popup__body--btn"><a href="${projects.subCards[index].live}" target="_blank">See Live</a><img src="../img/icons/icon-see-live.svg" alt="Live"></button>
          <button class="btn popup__body--btn"><a href="${projects.subCards[index].source}" target="_blank">See Source</a></Source><img src="../img/socials/github-white.svg" alt="GitHub"></button>
        </div>
      </div>
    </div>
  </div>
</section>`;
});

// Modal Functionality
[...seeProjectBtn].forEach((project, index) => {
  project.addEventListener('click', () => {
    document.body.insertAdjacentHTML('afterbegin', modal[index]);
    document.getElementsByClassName('popup__head--cross')[0].addEventListener('click', () => {
      document.getElementsByClassName('popup__section')[0].remove();
    });
  });
});

document.getElementsByClassName('mainCard--btn')[0].addEventListener('click', () => {
  document.body.insertAdjacentHTML('afterbegin', modal[0]);
  document.getElementsByClassName('popup__head--cross')[0].addEventListener('click', () => {
    document.getElementsByClassName('popup__section')[0].remove();
  });
});

//Email Validation
const submit = document.getElementById('form');
submit.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  const lowerCaseEmail = document.getElementById('email').value.toLowerCase();
  const error = document.getElementById('error-msg');
  let msg = document.createTextNode("Email should be in lower-case.");
  if (lowerCaseEmail !== email) {
    error.append(msg);
    e.preventDefault();
  }
});