//Obtain DOM elements
const menuButton = document.getElementById('menu-button')
const mainHeader = document.getElementById('main-header')
const overlay = document.getElementById('main-overlay')
const activeClass = 'is-active'
const isTablet = matchMedia('(max-width : 734px)')

const toggleMenu = () => mainHeader.classList.toggle(activeClass)
const closeMenu = () => mainHeader.classList.remove(activeClass)
const closeMenuWhenLinkIsClicked = (event) => {
    if (event.target.tagName === 'A')
        closeMenu()
}
const closeWhenTypeEscape = (event) => {
    if (event.code === 'Escape')
        closeMenu()
}

const handleAddEventListener = () => {
    menuButton.addEventListener('click', toggleMenu)
    overlay.addEventListener('click', closeMenu)
    mainHeader.addEventListener('click', closeMenuWhenLinkIsClicked)
    mainHeader.addEventListener('keydown', closeWhenTypeEscape)
}

const handleRemoveEventListener = () => {
    menuButton.removeEventListener('click', toggleMenu)
    overlay.removeEventListener('click', closeMenu)
    mainHeader.removeEventListener('click', closeMenuWhenLinkIsClicked)
    mainHeader.removeEventListener('keydown', closeWhenTypeEscape)
}

const handleEventListener = (mediaQuery) => {
    if (mediaQuery.matches) handleAddEventListener()
    else handleRemoveEventListener()
}

export const handleActiveMenu = () => {
    if (isTablet.matches) handleAddEventListener()
    isTablet.addEventListener('change', handleEventListener())
}
