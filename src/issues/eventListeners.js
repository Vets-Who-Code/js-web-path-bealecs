//buttons on navbar for event listener
const projectsButton = document.getElementById("projectsID");
const aboutButton = document.getElementById("aboutID");
const contactButton = document.getElementById("contactID");
const resumeButton = document.getElementById("resumeID");
const logoButton = document.getElementById("logotitle");
const hamburger = document.querySelector(".hamburger-menu");
const dropDown = document.querySelector(".drop-down");
const burgerProjectsButton = document.getElementById("hamburgerProjectsID");
const burgerAboutButton = document.getElementById("hamburgerAboutID");
const burgerContactButton = document.getElementById("hamburgerContactID");
const burgerResumeButton = document.getElementById("hamburgerResumeID");

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

//toggle dropdown function
const toggleDropDown = () => {
    hamburger.classList.toggle("active");
    dropDown.classList.toggle("active");
}
//utilizes scrollIntoView
const scrollIntoViewFunc = (section) => {
    section.scrollIntoView({behavior: "smooth"});
}

//Event listeners being created
logoButton.addEventListener('click', () => {
    scrollIntoViewFunc(landingSection
        );
});

projectsButton.addEventListener('click', () => {
    scrollIntoViewFunc(projectsSection);
});

aboutButton.addEventListener('click', () => {
    scrollIntoViewFunc(aboutSection);
});

contactButton.addEventListener('click', () => {
    scrollIntoViewFunc(contactSection);
});

resumeButton.addEventListener('click', () => {
    scrollIntoViewFunc(resumeSection);
});

burgerProjectsButton.addEventListener('click', () => {
    scrollIntoViewFunc(projectsSection);
    toggleDropDown();
});

burgerAboutButton.addEventListener('click', () => {
    scrollIntoViewFunc(aboutSection);
    toggleDropDown();
});

burgerContactButton.addEventListener('click', () => {
    scrollIntoViewFunc(contactSection);
    toggleDropDown();
});

burgerResumeButton.addEventListener('click', () => {
    scrollIntoViewFunc(resumeSection);
    toggleDropDown();
});

hamburger.addEventListener('click', () => {
    toggleDropDown();
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