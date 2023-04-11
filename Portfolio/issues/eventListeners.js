//buttons on navbar for event listener
const projectsButton = document.getElementById("projectsID");
const aboutButton = document.getElementById("aboutID");
const contactButton = document.getElementById("contactID");
const resumeButton = document.getElementById("resumeID");
const logoButton = document.getElementById("logotitle");

//sections to scroll to element on click of navbar button
const projectsSection = document.getElementById("projectsSection");
const aboutSection = document.getElementById("aboutSection");
const contactSection = document.getElementById("contactSection");
const resumeSection = document.getElementById("resumeSection");
const landingSection = document.getElementById("landingSection")

//Event listeners being created
logoButton.addEventListener('click', () => {
    landingSection.scrollIntoView({behavior: "smooth"});
});

projectsButton.addEventListener('click', () => {
    projectsSection.scrollIntoView({behavior: "smooth"});
});

aboutButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({behavior: "smooth"});
});

contactButton.addEventListener('click', () => {
    contactSection.scrollIntoView({behavior: "smooth"});
});

//7ltDVBr6mKbRvohxheJ9h1