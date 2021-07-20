const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

const showMenu = () => navMenu.classList.add('show-menu');
const closeMenu = () => navMenu.classList.remove('show-menu');

navToggle.addEventListener('click', showMenu);
navClose.addEventListener('click', closeMenu);

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((e) => e.addEventListener('click', closeMenu));

const skillsHeader = document.querySelectorAll('.skills-header');

const toggleSkills = (e) => {
  if (e.target.classList.contains('skills-header')) {
    e.target.parentElement.classList.toggle('skills-open');
  } else {
    e.target.parentElement.parentElement.classList.toggle('skills-open');
  }
};

skillsHeader.forEach((e) => e.addEventListener('click', toggleSkills));

// Swiper

const swiper = [
  new Swiper('.project-container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.pagination-project',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  }),
  new Swiper('.certificates-container', {
    pagination: {
      el: '.pagination-certificates',
    },
  }),
];

// Active Link

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.add('active-link');
    } else {
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

// Change shadow header

const scrollHeader = () => {
  const nav = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

// Show scroll up

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  const height = document.documentElement.offsetHeight;

  const progressPercentage =
    125 - (125 * ((window.scrollY + screen.height) / height) * 100) / 100;

  const progressCircle = document.querySelector('.progress-percentage');
  progressCircle.style.strokeDashoffset = progressPercentage;

  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-Up class
  if (this.scrollY >= 318) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
