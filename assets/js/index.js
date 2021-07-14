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
