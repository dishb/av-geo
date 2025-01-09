const nav = document.querySelector('nav');

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

const actionBtnClick = () => { document.querySelector('#about').scrollIntoView() };

const scrollUpBtn = document.querySelector('#scroll-up-btn');

const hero = document.querySelector('#hero');

const scrollUp = () => { document.querySelector('#hero').scrollIntoView() };

window.onscroll = () => {
    if (document.body.scrollTop >= hero.offsetHeight || document.documentElement.scrollTop >= hero.offsetHeight) {
        scrollUpBtn.style.display = 'inline-block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
}
