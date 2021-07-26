import './components/nav-bar.js';
import './components/home-section.js';
import './components/skills-section.js';
import './components/history-section.js';
import './components/project-section.js';

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
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        pagination: false,
      },
    },
  }),
];

// Active Link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    const sectionId = current.getAttribute('id');

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
  if (window.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

// Show scroll up

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  const height = document.documentElement.offsetHeight;
  const footerHeight = document.querySelector('.footer').offsetHeight;

  const progressPercentage =
    125 - (125 * (window.scrollY + window.innerHeight - footerHeight)) / height;

  const progressCircle = document.querySelector('.progress-percentage');
  progressCircle.style.strokeDashoffset = progressPercentage;

  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-Up class
  if (window.scrollY >= 318) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

// Dark Light Theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
