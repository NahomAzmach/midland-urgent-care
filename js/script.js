// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional interactivity for the "Let's Chat" button
document.querySelector('.chat-button').addEventListener('click', function() {
    alert('Chat feature coming soon!');
    // You can replace this alert with actual chat window integration
});
