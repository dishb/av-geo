const nav = document.querySelector("nav");

const showNav = () => {
    nav.classList.add("shown");
    nav.classList.remove("hidden");
}

const hideNav = () => {
    nav.classList.add("hidden");
    nav.classList.remove("shown");
}

const handleMenuClick = () => {
    if (nav.classList.contains("hidden")) {
        showNav();
    } else {
        hideNav();
    }
}

const handleNavItemClick = (ev) => {
    hideNav();
    const element = document.querySelector(`#${ev.target.innerText.toLowerCase()}`);
    element.scrollIntoView();
}

const actionBtnClick = () => {
    const about = document.querySelector('#about');
    about.scrollIntoView();
}
