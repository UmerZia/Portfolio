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