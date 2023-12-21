const nav = document.querySelector('.nav'); //szukamy nawigacji
const navBtn = document.querySelector('.burger-btn'); //szukamy burgerka
const allNavItems = document.querySelectorAll('.nav__item') //All

const handleNav = () => {
    nav.classList.toggle('nav--active') //toggle to przełącznik (sprawdza czy mamy już klasę active)
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();

}

const handleNavItemsAnimation = () => {
    let delayTime = 0;
    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        // animation-delay: .3s;
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++
    })
}

navBtn.addEventListener('click', handleNav)
