const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
const video = document.getElementById('golfVideo');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const muteBtn = document.getElementById('muteBtn');
const unmuteBtn = document.getElementById('unmuteBtn');

playBtn.addEventListener('click', () => video.play());
pauseBtn.addEventListener('click', () => video.pause());
muteBtn.addEventListener('click', () => (video.muted = true));
unmuteBtn.addEventListener('click', () => (video.muted = false));

function toggleDropdown() {
  var dropdown = document.getElementById('languageDropdown');
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}

function changeLanguage(lang) {
  alert('تم تغيير اللغة إلى: ' + lang);
  
  toggleDropdown();
}

document.addEventListener('click', function (event) {
  var button = document.querySelector('.language-button');
  var dropdown = document.getElementById('languageDropdown');
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

'use strict';


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};



const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('active');
};

addEventOnElem(navTogglers, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('active');
};

addEventOnElem(navbarLinks, 'click', closeNavbar);

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }
};

