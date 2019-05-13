const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation
let navAnchor = document.querySelectorAll('a');
navAnchor[0].textContent = siteContent.nav["nav-item-1"];
navAnchor[1].textContent = siteContent.nav["nav-item-2"];
navAnchor[2].textContent = siteContent.nav["nav-item-3"];
navAnchor[3].textContent = siteContent.nav["nav-item-4"];
navAnchor[4].textContent = siteContent.nav["nav-item-5"];
navAnchor[5].textContent = siteContent.nav["nav-item-6"];

// Add more elements to the navigation items
let nav = document.querySelector('nav');

let homeElement = document.createElement('a');
homeElement.text = 'Home';
homeElement.href = 'index.html';
homeElement.style.color = 'green';

let projectElement = document.createElement('a');
projectElement.text = 'Projects';
projectElement.href = '#';
projectElement.style.color = 'green';

nav.prepend(homeElement);
nav.appendChild(projectElement);

// Make nav anchor links to be color green
let navAnchorArray = Array.from(navAnchor)
navAnchorArray.forEach(navItem => navItem.style.color = 'green');



// Cta
let cta = document.querySelector('.cta');
let ctaText = cta.children[0];
let adjustedCtaText = siteContent.cta["h1"].split(' ').map((word) => {
  return `${word} <br>`;
}).join( '');
ctaText.children[0].insertAdjacentHTML('afterbegin', adjustedCtaText)
ctaText.children[1].textContent = siteContent.cta["button"];
cta.children[1].src = siteContent.cta["img-src"];

// Main Content
let mainContent = document.querySelector('.main-content').children;
let topContent = mainContent[0];
let middleContent = mainContent[1];
let bottomContent = mainContent[2];
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];
middleContent.src = siteContent["main-content"]["middle-img-src"];
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

// Contact
let contact = document.querySelector('.contact').children;
contact[0].textContent = siteContent["contact"]["contact-h4"];
contact[1].textContent = siteContent["contact"]["address"];
contact[2].textContent = siteContent["contact"]["phone"];
contact[3].textContent = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector('footer').children;
footer[0].textContent = siteContent["footer"]["copyright"];

// Stretch Goals
const buttonUpdatingContent = {
  text: 'Get Started',
  backgroundColor: 'white',
  color: 'black',
  clickText: 'Getting Started...',
  clickBackgroundColor: 'green',
  clickColor: 'white',
  hoverText: 'Want to get Started?',
  hoverColor: 'orange',

}
let button = document.querySelector('button');
button.addEventListener('click', () => {
  button.textContent = buttonUpdatingContent.clickText;
  button.style.color = buttonUpdatingContent.clickColor;
  button.style.backgroundColor = buttonUpdatingContent.clickBackgroundColor;
});

button.addEventListener('mouseenter', () => {
  button.textContent = buttonUpdatingContent.hoverText,
  button.style.backgroundColor = buttonUpdatingContent.hoverColor
});

button.addEventListener('mouseleave', () => {
  button.textContent = buttonUpdatingContent.text,
  button.style.backgroundColor = buttonUpdatingContent.backgroundColor
  button.style.color = buttonUpdatingContent.color
});