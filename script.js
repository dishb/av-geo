// Select all elements needed in the script

const content = document.querySelector('#content');
const scrollDown = document.querySelector("#action-btn");
const iconBtn = document.querySelector('#icon-btn');
const navBar = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav-item');

// Scroll down to content functionality

scrollDown.addEventListener('click', () => {
    content.scrollIntoView();
});

// Scroll to home functionality
iconBtn.addEventListener('click', () => {
    nav.scrollIntoView();
})

scrollDown.addEventListener('click', () => {
    content.scrollIntoView();
});

// Nav items scroll down functionality
navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        const targetId = navItem.textContent.toLowerCase();
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView();
    });
});

