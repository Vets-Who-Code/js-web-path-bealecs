//buttons on navbar for event listener
const projectsButton = document.getElementById("projectsID");
const aboutButton = document.getElementById("aboutID");
const contactButton = document.getElementById("contactID");
const resumeButton = document.getElementById("resumeID");
const logoButton = document.getElementById("logotitle");

//buttons for project section
const pwpProject = document.getElementById("pwpSection");
const clifCatalog = document.getElementById("clifCatalogSection");
const ccLighting = document.getElementById("ccLightingSection");

//sections to scroll to element on click of navbar button
const projectsSection = document.getElementById("projectsSection");
const aboutSection = document.getElementById("aboutSection");
const contactSection = document.getElementById("contactSection");
const resumeSection = document.getElementById("resumeSection");
const landingSection = document.getElementById("landingSection");

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

resumeButton.addEventListener('click', () => {
    resumeSection.scrollIntoView({behavior: "smooth"});
});

//project section event listeners
pwpProject.addEventListener('click', () => {
    window.open("https://github.com/bealecs/pipswithpaul/blob/main/README.md", "_blank");
});
clifCatalog.addEventListener('click', () => {
    window.open("https://github.com/bealecs/meal/blob/main/README.md", "_blank");
});
ccLighting.addEventListener('click', () => {
    window.open("https://github.com/bealecs/CCLighting/blob/main/README.md", "_blank");
});