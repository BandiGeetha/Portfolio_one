// JavaScript for smooth scrolling between sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionID = this.getAttribute('href').substring(1);
        document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to specific section on button click
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}