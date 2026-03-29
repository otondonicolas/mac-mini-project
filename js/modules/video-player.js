const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target
        if (entry.isIntersecting) {
            video.play()
        } else {
            video.pause()
        }
    })
}, { threshold: 0.4 })

export const initVideoPlayers = () => {
    document.querySelectorAll('.video-container video').forEach(video => {
        videoObserver.observe(video)
    })
}
