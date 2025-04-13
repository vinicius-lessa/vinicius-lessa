import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

let isScrolling = false;

// Easing function for smooth animation (ease-out only)
const easeOutCubic = t => (t - 1) * (t - 1) * (t - 1) + 1;

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easeProgress = easeOutCubic(progress);
        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            isScrolling = false;
        }
    }

    requestAnimationFrame(animation);
}

window.addEventListener('wheel', (event) => {
    // Projects container has a different scrolling behavior
    const projectsContainer = document.querySelector('.projects-container');    
    if (projectsContainer && event.target.closest('.projects-container')) {
        return;
    }
    
    event.preventDefault();
    
    if (isScrolling) return;
    
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;
    
    let targetSection;
    
    if (event.deltaY > 0) {
        // Scrolling down
        targetSection = Array.from(sections).find(
            (section) => section.offsetTop > currentScroll + 10
        );
    } else {
        // Scrolling up
        targetSection = Array.from(sections)
            .reverse()
            .find((section) => section.offsetTop < currentScroll - 10);
    }
    
    if (targetSection) {
        isScrolling = true;
        smoothScrollTo(targetSection.offsetTop, 1000); // 1000ms = 1s duration
    }
}, { passive: false });