const nav = document.querySelector('nav');
const actionBtn = document.getElementById('action-btn')

const handleMenuClick = () => {
    if (nav.classList.contains('hidden')) {
        nav.classList.add('shown');
        nav.classList.remove('hidden');
        actionBtn.classList.add('hidden');
        actionBtn.classList.remove('shown');
    } else {
        nav.classList.add('hidden');
        nav.classList.remove('shown');
        actionBtn.classList.add('shown');
        actionBtn.classList.remove('hidden');
    }
}

const handleNavItemClick = (ev) => {
    nav.classList.add('hidden');
    nav.classList.remove('shown');
    console.log(ev);
    console.log(ev.target.innerText.toLowerCase());
    const element = document.getElementById(`${ev.target.innerText.toLowerCase()}`);
    element.scrollIntoView();
}

const actionBtnClick = () => { document.getElementById('about').scrollIntoView() };

const scrollUpBtn = document.getElementById('scroll-up-btn');

const scrollUp = () => { document.getElementById('hero').scrollIntoView() };

window.onscroll = () => {
    if (document.body.scrollTop >= hero.offsetHeight || document.documentElement.scrollTop >= hero.offsetHeight) {
        scrollUpBtn.style.display = 'inline-block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
}
