// Load GSAP
const gsapScript = document.createElement('script');
gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
document.head.appendChild(gsapScript);

gsapScript.onload = () => {
    // Initialize cursor
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);

    // Cursor follow animation
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.4
        });
    });

    // Split text animation
    const animateHeroText = () => {
        const h1Element = document.querySelector('.hero-title');
        if (h1Element) {
            const h1Text = h1Element.textContent;
            h1Element.textContent = '';
            const charactersArray = h1Text.split('');
            
            let charSet = '';
            charactersArray.forEach((text) => {
                if (text === ' ') {
                    charSet += ' ';
                } else {
                    charSet += `<span class="gsapSpan">${text}</span>`;
                }
            });
            
            h1Element.innerHTML = charSet;

            // Animate each letter
            gsap.from('.gsapSpan', {
                y: 80,
                scale: 2.5,
                opacity: 0,
                stagger: 0.1
            });
        }
    };

    // Main animations
    const initAnimations = () => {
        // Logo animation
        gsap.from('.nav-logo', {
            scale: 0,
            duration: 1.8
        });

        // Nav links animation
        gsap.from('.nav-link', {
            y: -100,
            scale: 2,
            opacity: 0,
            stagger: 0.3
        });

        // Hero content animations
        const tl = gsap.timeline();

        // Animate features
        gsap.from('.feature-item', {
            x: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.8,
            ease: "power2.out"
        });

        gsap.from('.hero-subtitle', {
            x: -200,
            scale: 0,
            opacity: 0,
            duration: 0.8
        });

        gsap.from('.cta-button', {
            x: -200,
            scale: 0,
            opacity: 0,
            duration: 0.8
        });

        // Animate hero text
        animateHeroText();
    };

    // Initialize animations when content is loaded
    if (document.readyState === 'complete') {
        initAnimations();
    } else {
        window.addEventListener('load', initAnimations);
    }
};

// Prevent right-click on images
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});