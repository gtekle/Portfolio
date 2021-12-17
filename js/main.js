const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const btnMenuClose = document.querySelector('.btn-menu-close');
const btnMenuOpen = document.querySelector('.btn-menu-toggle');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const body = document.querySelector('body');

const projects = [
  {
    title: 'Tonic',
    client: 'canopy',
    role: 'Back End Dev',
    year: '2015',
    featuredImage: './img/tonic-project-snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootsrap'],
    livelink: 'https://gtekle.github.io/Portfolio/',
    sourcelink: 'https://github.com/gtekle/Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    client: 'Facebook',
    role: 'Full Stack Dev',
    year: '2016',
    featuredImage: './img/multi-post-stories-project-snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    livelink: 'https://gtekle.github.io/Portfolio/',
    sourcelink: 'https://github.com/gtekle/Portfolio',
  },
  {
    title: 'Facebook 360',
    client: 'Facebook',
    role: 'Full Stack Dev',
    year: '2017',
    featuredImage: './img/tonic-two-project-snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    livelink: 'https://gtekle.github.io/Portfolio/',
    sourcelink: 'https://github.com/gtekle/Portfolio',
  },
  {
    title: 'Uber Navigation',
    client: 'Uber',
    role: 'Full Stack Dev',
    year: '2018',
    featuredImage: './img/multi-post-stories-two-project-snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript', 'github'],
    livelink: 'https://gtekle.github.io/Portfolio/',
    sourcelink: 'https://github.com/gtekle/Portfolio',
  },
];

btnMenuOpen.addEventListener('click', (event) => {
  event.preventDefault();
  mobileNavMenu.style.display = 'block';
  body.style.overflow = 'hidden';
});

btnMenuClose.addEventListener('click', (event) => {
  event.preventDefault();
  mobileNavMenu.style.display = 'none';
  body.style.overflow = '';
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
    body.style.overflow = '';
  });
});

const worksContainer = document.querySelector('.works-container');
const sectionHeading = document.createElement('h2');
sectionHeading.className = 'section-title';
sectionHeading.textContent = 'Projects';
worksContainer.appendChild(sectionHeading);

projects.forEach((project, index) => {
  const newIndex = index + 1;
  const projectId = `project${newIndex}`;
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `<div class="project-snapshoot">
            <img
              src=${project.featuredImage}
              alt="${project.title} featured image"
            />
          </div>
          <div class="project-detail">
            <h3 class="project-title">${project.title}</h3>
            <ul class="project-metadata">
              <li class="client">${project.client}</li>
              <li><span class="counter"></span></li>
              <li class="role">${project.role}</li>
              <li><span class="counter"></span></li>
              <li class="year">${project.year}</li>
            </ul>
            <p class="project-description">
              ${project.description}
            </p>
            <ul class="languages project-technologies">
            </ul>
            <button id=${projectId} class="btn btn-see-project" type="button">
              See Project
            </button>
          </div>`;
  worksContainer.appendChild(card);
});

const technologyList = document.querySelectorAll('.project-technologies');
const technologyListArray = Array.from(technologyList);

technologyListArray.forEach((projectTechnologyList, index) => {
  let listItem;
  projects[index].technologies.map((technology) => {
    listItem = document.createElement('li');
    listItem.innerHTML = `<span>${technology}</span>`;
    technologyList[index].appendChild(listItem);
    return 0;
  });
});

function createModal(index) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `<div class="modal">
             <a id="modal-close-icon" href="#" class="btn-modal-close">
                <i class="fas fa-times"></i>
              </a>
            <h3 class="project-title" id="project-title">${projects[index].title}</h3>

            <div class="modal-header">
              <h3 class="project-client" id="project-client">${projects[index].client}</h3>
              <ul class="role-year-ul">
                <li class="project-role" id="project-role">${projects[index].role}</li>
                <li class="project-year" id="project-year">${projects[index].year}</li>
              </ul>
            </div>
            <div class="featured-image-container">
              <img
                id="project-snapshot"
                class="featured-image"
                src=${projects[index].featuredImage}
                alt="${projects[index].title} project featured image"
              />
            </div>
            <div class="project-details">
              <div class="project-description-div">
                <p class="modal-description" id="project-description">
                  ${projects[index].description}
                </p>
              </div>
              <div class="technologies-buttons">
                <div>
                  <ul class="project-modal-technologies languages" id="project-technologies"></ul>
                </div>
                <div class="modal-see-btn">
                  <button class="btn project-live" id="project-live">
                    <a class="modal-link" href=${projects[index].livelink}>
                      See live 
                      <i class="fas fa-external-link-alt"></i> 
                    </a>
                  </button>

                  <button class="btn project-source" id="project-source">
                  <a class="modal-link" href=${projects[index].sourcelink}>
                      See Source
                      <i class="fab fa-github"></i>
                    </a>                    
                  </button>
                </div>
              </div>
            </div>`;
  worksContainer.appendChild(modalOverlay);
}

function populateModalTechnologyList(index) {
  const modalTechnology = document.querySelector('.project-modal-technologies');
  let listItem;

  projects[index].technologies.map((technology) => {
    listItem = document.createElement('li');
    listItem.innerHTML = `<span>${technology}</span>`;
    modalTechnology.appendChild(listItem);
    return 0;
  });
}

function isCloseButtonClicked(modalCover) {
  if (modalCover.style.display === 'block') {
    const modalCloseButton = document.querySelector('#modal-close-icon');
    const modalTechnology = document.querySelector(
      '.project-modal-technologies',
    );
    modalCloseButton.addEventListener('click', () => {
      modalCover.style.display = 'none';
      modalTechnology.innerHTML = '';
      body.style.overflow = '';
      worksContainer.removeChild(modalCover);
    });
  }
}

const seeProjectBtns = document.querySelectorAll('.btn-see-project');

seeProjectBtns.forEach((seeProjectBtn) => {
  seeProjectBtn.addEventListener('click', () => {
    const projectId = seeProjectBtn.id;
    const index = parseInt(projectId.substring(projectId.length - 1), 10) - 1;
    createModal(index);
    const modalCover = document.querySelector('.modal-overlay');
    modalCover.style.display = 'block';
    populateModalTechnologyList(index);
    isCloseButtonClicked(modalCover);
    body.style.overflow = 'hidden';
  });
});

const form = document.querySelector('.contact-form');
const labelError = document.querySelector('.errors-div');
const EMAIL_INVALID = 'Email address should be written in lower case';

function validateEmail(email) {
  const emailValue = email.value.trim();
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

  if (!emailRegex.test(emailValue)) {
    return false;
  }

  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email } = form.elements;
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    labelError.style.display = 'none';
    form.submit();
  } else {
    labelError.style.display = 'block';
    labelError.innerHTML = `${EMAIL_INVALID}!\n`;
  }
});

// contact form local storage

const inputElements = document.querySelectorAll('.contact-form-input');

const contactMessage = {
  name: '',
  email: '',
  message: '',
};

function populateStorage() {
  localStorage.setItem('formData', JSON.stringify(contactMessage));
}

inputElements.forEach((input) => {
  input.addEventListener('change', () => {
    contactMessage[input.name] = form.elements[input.name].value.trim();
    populateStorage();
  });
});

window.addEventListener('load', () => {
  const inputElements = document.querySelectorAll('.contact-form-input');
  if (localStorage.getItem('formData') !== '' || localStorage.getItem('formData') !== null) {
    inputElements.forEach((input) => {
      input.value = JSON.parse(localStorage.getItem('formData'))[input.name];
      contactMessage[input.name] = input.value;
    });
  }
});
