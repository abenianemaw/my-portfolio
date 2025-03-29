document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section and scroll to it with an offset
        const targetId = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetId.offsetTop - 60, // Subtract the navbar height (60px)
            behavior: 'smooth' // For smooth scrolling
        });
    });
});
