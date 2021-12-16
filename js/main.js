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
    title: 'Tonic',
    client: 'canopy',
    role: 'Back End Dev',
    year: '2015',
    featuredImage: './img/multi-post-stories-project-snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    livelink: 'https://gtekle.github.io/Portfolio/',
    sourcelink: 'https://github.com/gtekle/Portfolio',
  },
  {
    title: 'Tonic',
    client: 'canopy',
    role: 'Back End Dev',
    year: '2015',
    featuredImage: './img/tonic-two-project-snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    livelink: 'https://gtekle.github.io/Portfolio/',
    sourcelink: 'https://github.com/gtekle/Portfolio',
  },
  {
    title: 'Tonic',
    client: 'canopy',
    role: 'Back End Dev',
    year: '2015',
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
  const projectId = 'project${newIndex}';
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
            <ul class="languages">
            </ul>
            <button id=${projectId} class="btn btn-see-project" type="button">
              See Project
            </button>
          </div>`;
  worksContainer.appendChild(card);
});

const technologyList = document.querySelectorAll('.languages');
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
