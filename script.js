const modal = document.querySelector('#modal');
const xBtn = document.querySelector('#x');

const aboutLink = document.querySelector('#about-link');
const projectsLink = document.querySelector('#projects-link');
const contactLink = document.querySelector('#contact-link');

const aboutContent = document.querySelector('#about-page');
const projectsContent = document.querySelector('#projects-page');
const contactContent = document.querySelector('#contact-page');

let currPage = '';

aboutLink.addEventListener('click', e => {
  modal.style.display = 'block';
  aboutContent.style.display = 'block';
  currPage = 'about';
});

projectsLink.addEventListener('click', e => {
  modal.style.display = 'block';
  projectsContent.style.display = 'block';
  currPage = 'projects';
});

contactLink.addEventListener('click', e => {
  modal.style.display = 'block';
  contactContent.style.display = 'block';
  currPage = 'contact';
});

xBtn.addEventListener('click', e => {
  modal.style.display = 'none';
  if (currPage === 'about') {
    aboutContent.style.display = 'none';
  }
  else if (currPage === 'projects') {
    projectsContent.style.display = 'none';
  }
  else {
    contactContent.style.display = 'none';
  }
});