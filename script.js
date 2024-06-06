document.addEventListener("DOMContentLoaded", function() {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) {
        aboutLink.addEventListener("click", function(event) {
            event.preventDefault();
            scrollToSection("about");
        });
    }

    const projectsLink = document.querySelector('a[href="#projects"]');
    if (projectsLink) {
        projectsLink.addEventListener("click", function(event) {
            event.preventDefault();
            scrollToSection("projects");
        });
    }

    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener("click", function(event) {
            event.preventDefault();
            scrollToSection("contact");
        });
    }

    const letsStartButton = document.getElementById("letsStartButton");
    if (letsStartButton) {
        letsStartButton.addEventListener("click", function() {
            const emailInput = document.getElementById("mail");
            const email = emailInput.value.trim();
            if (validateEmail(email)) {
                scrollToSection("about");
            }
        });
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email)) {
            return true;
        } else {
            alert("Please enter a valid email address.");
            return false;
        }
    }
});