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

/*HEADER*/
//nav Bar
let navArray = document.querySelectorAll('.container header nav a');

navArray[0].textContent = siteContent.nav["nav-item-1"]; 
navArray[1].textContent = siteContent.nav["nav-item-2"];
navArray[2].textContent = siteContent.nav["nav-item-3"];
navArray[3].textContent = siteContent.nav["nav-item-4"];
navArray[4].textContent = siteContent.nav["nav-item-5"];
navArray[5].textContent = siteContent.nav["nav-item-6"];

      //WHY DIDNT THIS WORK?//
// for(let i = 0; i < navArray.length; i++)
// {
//   navArray[i].textContent = siteContent.nav[i].;
// }

let nav_img = document.querySelector('.container header img');
nav_img.src = siteContent.nav["img-src"];

/*CTA*/
  //cta-text

let ctaText_h1 = document.querySelector(' .cta-text h1');
ctaText_h1.textContent = siteContent.cta.h1;

let ctaText_button = document.querySelector('.cta-text button');
ctaText_button.textContent = siteContent.cta.button;
  //cta img
let cta_img = document.querySelector('.cta img');
cta_img.src = siteContent.cta["img-src"];

/*Main Content*/
  //top-content
let topCont_h4 = document.querySelectorAll('.text-content h4');
topCont_h4[0].textContent = siteContent["main-content"]["features-h4"];
topCont_h4[1].textContent = siteContent["main-content"]["about-h4"];

let topCont_p = document.querySelectorAll(".text-content p");
topCont_p[0].textContent = siteContent["main-content"]["features-content"];
topCont_p[1].textContent = siteContent["main-content"]["about-content"];

let mainCont_img = document.querySelector('.middle-img');
mainCont_img.src = siteContent["main-content"]["middle-img-src"];

let bottomCont_h4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomCont_h4[0].textContent = siteContent["main-content"]["services-h4"];
bottomCont_h4[1].textContent = siteContent["main-content"]["product-h4"];
bottomCont_h4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomCont_p = document.querySelectorAll(".bottom-content .text-content p");
bottomCont_p[0].textContent = siteContent["main-content"]["services-content"];
bottomCont_p[1].textContent = siteContent["main-content"]["product-content"];
bottomCont_p[2].textContent = siteContent["main-content"]["vision-content"];

/*Contact*/

let contact_h4 = document.querySelector('.contact h4');
contact_h4.textContent = siteContent.contact['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

/*Footer*/

let footer_p = document.querySelector('footer p');
footer_p.textContent = siteContent.footer.copyright;