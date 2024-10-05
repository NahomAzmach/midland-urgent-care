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

// FAQ Accordion Dropdown
// FAQ Accordion Dropdown
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        // Toggle the active class on the clicked question
        this.classList.toggle('active');

        // Get the corresponding answer div
        const answer = this.nextElementSibling;

        // Toggle the max-height of the answer to either expand or collapse
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null; // Collapse the answer
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer
        }
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; // Adjusts scrolling speed
});


