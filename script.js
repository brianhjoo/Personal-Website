const wrapper = document.querySelector('#wrapper');
const footer = document.querySelector('footer');
const modal = document.querySelector('#modal');
const xBtn = document.querySelector('#x');

const aboutLink = document.querySelector('#about-link');
const projectsLink = document.querySelector('#projects-link');
const contactLink = document.querySelector('#contact-link');

const aboutContent = document.querySelector('#about-page');
const projectsContent = document.querySelector('#projects-page');
const contactContent = document.querySelector('#contact-page');

const aboutTitle = document.querySelector('#about-title');
const projectsTitle = document.querySelector('#projects-title');
const contactTitle = document.querySelector('#contact-title');

let currPage = '';

aboutLink.addEventListener('click', e => {
  modal.style.display = 'block';
  aboutContent.style.display = 'block';
  aboutTitle.style.display = 'block';
  wrapper.style.filter = 'blur(0.3rem)';
  footer.style.filter = 'blur(0.3rem)';
  currPage = 'about';
});

projectsLink.addEventListener('click', e => {
  modal.style.display = 'block';
  projectsContent.style.display = 'block';
  projectsTitle.style.display = 'block';
  wrapper.style.filter = 'blur(0.3rem)';
  footer.style.filter = 'blur(0.3rem)';
  currPage = 'projects';
});

contactLink.addEventListener('click', e => {
  modal.style.display = 'block';
  contactContent.style.display = 'block';
  contactTitle.style.display = 'block';
  wrapper.style.filter = 'blur(0.3rem)';
  footer.style.filter = 'blur(0.3rem)';
  currPage = 'contact';
});

xBtn.addEventListener('click', e => {
  modal.style.display = 'none';
  wrapper.style.filter = 'none';
  footer.style.filter = 'none';
  if (currPage === 'about') {
    aboutContent.style.display = 'none';
    aboutTitle.style.display = 'none';
  }
  else if (currPage === 'projects') {
    projectsContent.style.display = 'none';
    projectsTitle.style.display = 'none';
  }
  else {
    contactContent.style.display = 'none';
    contactTitle.style.display = 'none';
  }
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    wrapper.style.filter = 'none';
    footer.style.filter = 'none';
    if (currPage === 'about') {
      aboutContent.style.display = 'none';
      aboutTitle.style.display = 'none';
    }
    else if (currPage === 'projects') {
      projectsContent.style.display = 'none';
      projectsTitle.style.display = 'none';
    }
    else {
      contactContent.style.display = 'none';
      contactTitle.style.display = 'none';
    }
  }
});