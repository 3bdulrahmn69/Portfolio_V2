const bars = document.getElementById('bars');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav ul li');
const Sections = document.querySelectorAll('section');
const works = document.getElementById('works');

const myWorks = [
  {
    name: 'E-Store',
    image: 'assets/screenshots/EStore.png',
    tools: 'HTML, CSS, JavaScript',
    demoLink: 'http://walidblog.tech/',
    codeLink: 'https://github.com/3bdulrahmn69/Estore',
  },
  {
    name: 'Youtube Clone',
    image: 'assets/screenshots/Youtube.png',
    tools: 'React js, Axios, Material UI, Rapid API',
    demoLink: 'https://abdelrahman69-youtube.netlify.app/',
    codeLink: 'https://github.com/3bdulrahmn69/youtube_clone_v2',
  },
  {
    name: 'LoveLoom',
    image: 'assets/screenshots/LoveLoom.png',
    tools: 'HTML, CSS, Tailwind CSS, JavaScript, GSAP',
    demoLink: 'https://loveloom.netlify.app/',
    codeLink: 'https://github.com/3bdulrahmn69/LoveLoom',
  },
];

if (window.location.href.includes('works')) {
  myWorks.forEach((work) => {
    createWorkCard(
      work.name,
      work.image,
      work.tools,
      work.demoLink,
      work.codeLink
    );
  });
} else {
  myWorks.slice(-2).forEach((work) => {
    createWorkCard(
      work.name,
      work.image,
      work.tools,
      work.demoLink,
      work.codeLink
    );
  });
}

function createWorkCard(wName, wImage, wTools, dLink, gLink) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardName = document.createElement('h3');
  cardName.classList.add('text-center', 'text-2xl', 'text-nowrap');
  cardName.innerText = wName;
  card.appendChild(cardName);

  const cardImage = document.createElement('img');
  cardImage.classList.add('w-full');
  cardImage.setAttribute('src', wImage);
  cardImage.setAttribute('alt', wName);
  card.appendChild(cardImage);

  const cardTools = document.createElement('p');
  cardTools.innerText = wTools;
  card.appendChild(cardTools);

  const cardLinks = document.createElement('div');
  cardLinks.classList.add('links');
  const cardDemoLink = document.createElement('a');
  cardDemoLink.setAttribute('href', dLink);
  cardDemoLink.setAttribute('target', '_blank');
  cardDemoLink.innerText = 'Live Demo';
  cardLinks.appendChild(cardDemoLink);

  const cardCodeLink = document.createElement('a');
  cardCodeLink.setAttribute('href', gLink);
  cardCodeLink.setAttribute('target', '_blank');
  cardCodeLink.innerText = 'GitHub Code';
  cardLinks.appendChild(cardCodeLink);

  card.appendChild(cardLinks);

  works.appendChild(card);
}

bars.addEventListener('click', () => {
  if (header.classList.contains('hidden')) {
    header.animate([{ width: '0' }, { width: '33.3333%' }], {
      duration: 300,
      fill: 'forwards',
    });
    header.classList.remove('hidden');
  } else {
    header.animate([{ width: '33.3333%' }, { width: '0' }], {
      duration: 300,
      fill: 'backwards',
    });
    header.classList.add('hidden');
  }
});

window.addEventListener('click', (e) => {
  if (e.target.tagName != 'UL' && e.target.tagName != 'I') {
    if (!header.classList.contains('hidden')) {
      header.animate([{ width: '33.3333%' }, { width: '0' }], {
        duration: 300,
        fill: 'backwards',
      });
      header.classList.add('hidden');
    }
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

Sections.forEach((section) => {
  section.addEventListener('mouseover', () => {
    let sectionId = section.getAttribute('id');
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('data-link') == sectionId) {
        link.classList.add('active');
      }
    });
  });
});
