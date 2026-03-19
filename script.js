document.addEventListener("DOMContentLoaded", () => {
    // Fade IN when page loads
    document.body.classList.remove("fade-out");

    // Handle link clicks
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");

            // Ignore anchors and external links
            if (!href || href.startsWith("#") || this.target === "_blank") return;

            e.preventDefault();

            // Start fade out
            document.body.classList.add("fade-out");

            // Navigate after fade
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});