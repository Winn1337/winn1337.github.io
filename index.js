// Future interactivity can be added here.
// Example: Add a fade-in animation to the main section on page load.

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("body");
    const iframe = document.querySelector("iframe");

    if (iframe) {
        iframe.addEventListener("load", () => {
            main.style.opacity = 0;
            main.style.transition = "opacity 0.8s ease-in";

            requestAnimationFrame(() => {
                main.style.opacity = 1;
            });
        });
    } else {
        // Fallback if iframe is not found
        main.style.opacity = 0;
        main.style.transition = "opacity 0.8s ease-in";

        requestAnimationFrame(() => {
            main.style.opacity = 1;
        });
    }
});