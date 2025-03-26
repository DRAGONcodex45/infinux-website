document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const closeMenu = document.getElementById("close-menu");
    const navLinks = document.getElementById("nav-links");
    const dropdown = document.querySelector(".dropdown");

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function () {
        navLinks.classList.add("show");
    });

    // Close menu on "X" click
    closeMenu.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });

    // Toggle dropdown in mobile view
    dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.classList.toggle("open");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
});

 // 

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const cards = document.querySelectorAll(".card");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            menuItems.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Hide all cards
            cards.forEach(card => card.classList.remove("active"));

            // Show the corresponding card
            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});

// AI TOOLS BUTTONS SECTION

function showBoxes(setClass) {
    // Hide all sets first
    let allSets = document.querySelectorAll(".container");
    allSets.forEach(set => {
        set.style.display = "none"; // Hide all sets
    });

    // Show the selected set
    let selectedSet = document.querySelector("." + setClass);
    if (selectedSet) {
        selectedSet.style.display = "flex"; // Show the container

        // Make sure all boxes inside are visible
        let boxes = selectedSet.querySelectorAll(".box");
        boxes.forEach(box => {
            box.style.display = "block"; // Ensure boxes are displayed
        });
    }
}

// FAQ SECTION

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const icon = item.querySelector(".icon");

        question.addEventListener("click", () => {
            // Close other open FAQs before opening the clicked one
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".icon").textContent = "+";
                }
            });

            // Toggle the active class on the clicked item
            item.classList.toggle("active");

            // Change icon based on active state
            icon.textContent = item.classList.contains("active") ? "-" : "+";
        });
    });
});

// Interactive text scale effect on hover
document.querySelector(".brand").addEventListener("mouseenter", () => {
    gsap.to(".brand", { scale: 1.1, duration: 0.3, ease: "power1.out" });
});

document.querySelector(".brand").addEventListener("mouseleave", () => {
    gsap.to(".brand", { scale: 1, duration: 0.3, ease: "power1.out" });
});

