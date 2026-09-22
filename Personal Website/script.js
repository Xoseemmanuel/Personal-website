document.addEventListener("DOMContentLoaded", () => {
    // 1. Automatically update copyright year in the footer
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth scroll when clicking "Get In Touch" button
    const contactBtn = document.getElementById("contact-btn");
    if (contactBtn) {
        contactBtn.addEventListener("click", () => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        });
    }

    // 3. Highlight active nav item based on current page position
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${currentSectionId}`) {
                item.classList.add("active");
            }
        });
    });

    // 4. Handle Contact Form submission
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload

            const name = document.getElementById("visitor-name").value;
            formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
            
            // Clear form inputs
            contactForm.reset();
        });
    }
});