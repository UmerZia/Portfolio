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
let cardsection=`<!-- My Recent Work -->
<section class="container" id="work">
  <div class="work">
    <div class="work__header">
      <h2 class="work__title">My Recent Works</h2>
      <div class="line line-black"></div>
    </div>
    <!-- Main Card -->
    <div class="work__mainCard" aria-label="Main Card">
      <img id="poster" src="img/cards/main-card.svg" alt="Exercise Poster" aria-labelledby="main-card-title" />
      <div class="work__mainCard__content">
        <h2 class="work__mainCard--heading" id="main-card-title">
          Multi-Post Stories
        </h2>
        <p class="work__mainCard--desc">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required. has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a standard
          dummy text.
        </p>
        <ul class="work__mainCard__tech">
          <li class="mainCard__tech-name">
            <a class="tech-name-black" href="#">CSS</a>
          </li>
          <li class="mainCard__tech-name">
            <a class="tech-name-black" href="#">HTML</a>
          </li>
          <li class="mainCard__tech-name">
            <a class="tech-name-black" href="#">Bootstrap</a>
          </li>
          <li class="mainCard__tech-name">
            <a class="tech-name-black" href="#">Ruby</a>
          </li>
        </ul>
        <button class="mainCard--btn btn">See Project</button>
      </div>
    </div>
    <!-- Sub Cards -->
    <div class="work__grid">
      <!-- Card -->
      <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h1 class="work__subCard--heading">
            Professional Art Printing Data
          </h1>
          <p class="work__subCard--decs">
            A daily selection of privately personalized reads; no accounts
            or sign-ups required. has been the industry's standard
          </p>
          <ul class="work__subCard__tech">
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">HTML</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Bootstrap</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Ruby</a>
            </li>
          </ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>
      <!-- Card -->
      <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h1 class="work__subCard--heading">
            Professional Art Printing Data
          </h1>
          <p class="work__subCard--decs">
            A daily selection of privately personalized reads; no accounts
            or sign-ups required. has been the industry's standard
          </p>
          <ul class="work__subCard__tech">
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">HTML</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Bootstrap</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Ruby</a>
            </li>
          </ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>
      <!-- Card -->
      <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h2 class="work__subCard--heading">
            Professional Art Printing Data
          </h2>
          <p class="work__subCard--decs">
            A daily selection of privately personalized reads; no accounts
            or sign-ups required. has been the industry's standard
          </p>
          <ul class="work__subCard__tech">
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">HTML</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Bootstrap</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Ruby</a>
            </li>
          </ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>
      <!-- Card -->
      <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h1 class="work__subCard--heading">
            Professional Art Printing Data
          </h1>
          <p class="work__subCard--decs">
            A daily selection of privately personalized reads; no accounts
            or sign-ups required. has been the industry's standard
          </p>
          <ul class="work__subCard__tech">
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">HTML</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Bootstrap</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Ruby</a>
            </li>
          </ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>
      <!-- Card -->
      <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h1 class="work__subCard--heading">
            Professional Art Printing Data
          </h1>
          <p class="work__subCard--decs">
            A daily selection of privately personalized reads; no accounts
            or sign-ups required. has been the industry's standard
          </p>
          <ul class="work__subCard__tech">
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">HTML</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Bootstrap</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Ruby</a>
            </li>
          </ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>
      <!-- Card -->
      <div class="work__subCard" aria-label="Card">
        <div class="work__subCard__content">
          <h1 class="work__subCard--heading">
            Professional Art Printing Data
          </h1>
          <p class="work__subCard--decs">
            A daily selection of privately personalized reads; no accounts
            or sign-ups required. has been the industry's standard
          </p>
          <ul class="work__subCard__tech">
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">HTML</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Bootstrap</a>
            </li>
            <li class="subCard__tech-name">
              <a class="tech-name-white" href="#">Ruby</a>
            </li>
          </ul>
          <button class="subCard--btn btn">See Project</button>
        </div>
      </div>
    </div>
  </div>
</section>`