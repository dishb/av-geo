// Select all elements needed in the script

const content = document.querySelector('#content');
const scrollDown = document.querySelector("#action-button");

// Scroll down to content functionality

scrollDown.addEventListener('click', () => {
    content.scrollIntoView();
})
