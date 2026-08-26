const bgImage = document.querySelector('.bg-image') as HTMLElement;
const speed = 0.4;

function sizeBackground() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const buffer = maxScroll * speed;
    bgImage.style.height = `${window.innerHeight + buffer}px`;
}

function updateParallax() {
    bgImage.style.transform = `translateY(${-window.scrollY * speed}px)`;
}

sizeBackground();
window.addEventListener('resize', sizeBackground);
window.addEventListener('scroll', () => {
    requestAnimationFrame(updateParallax);
}, {passive: true});