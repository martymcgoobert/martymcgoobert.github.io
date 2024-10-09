// Typing animation removed

document.addEventListener('DOMContentLoaded', () => {
    const mouseFollower = document.getElementById('mouse-follower');
    
    if (!mouseFollower) {
        console.error('Mouse follower element not found');
        return;
    }

    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            mouseFollower.style.left = `${e.clientX - 10}px`;
            mouseFollower.style.top = `${e.clientY - 10}px`;
        });
    });

    document.addEventListener('click', () => {
        mouseFollower.classList.add('clicked');
        setTimeout(() => {
            mouseFollower.classList.remove('clicked');
        }, 300);
    });

    console.log('Mouse follower script initialized');
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const dropdown = document.querySelector('.mobile-nav-dropdown');
    const closeDropdown = document.querySelector('.close-dropdown');
    const overlay = document.querySelector('.overlay');

    function toggleDropdown() {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    }

    burgerMenu.addEventListener('click', toggleDropdown);
    closeDropdown.addEventListener('click', toggleDropdown);

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            toggleDropdown();
        }
    });
});
