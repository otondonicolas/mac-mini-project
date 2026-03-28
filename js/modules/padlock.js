export const initPadlockAnimation = () => {
    const padlock = document.querySelector('.padlock-sprite')
    if (!padlock) return

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                padlock.classList.add('is-animating')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 })

    observer.observe(padlock)
}
