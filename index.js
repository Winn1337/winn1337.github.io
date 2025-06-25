function loadProjectsScript(callback) {
    const script = document.createElement("script");
    script.src = './projects.js?v=' + new Date().getTime(); // Add cache-busting query string
    script.type = "module";
    script.onload = callback;
    document.head.appendChild(script);
}

loadProjectsScript(() => {
    // Wait for the script to load, then access the `projects` array
    import('./projects.js?v=' + new Date().getTime())
        .then(module => {
            const projects = module.projects;

            const container = document.getElementById("project-container");
            if (!container) return;

            projects.filter(project => project.staticThumbnail)
            .forEach(project => {
                const card = document.createElement("a");
                card.classList.add("project-card");
                /* if (String(project.fullDescription).length < 750)
                {
                    card.classList.add("invalid");
                } */
                card.href = `project.html?title=${encodeURIComponent(project.title)}`;
                card.innerHTML = `
                    <img src="${project.staticThumbnail}" alt="${project.title}" />
                    <p></p>
                    <h>${project.title} (${project.year})</h>
                    <p>${project.summary}</p>
                `;

                container.appendChild(card);
            });
        })
    // Fade in after done loading
    .then(() => {
        const main = document.querySelector("body");
        const iframe = document.querySelector("iframe");

        if (iframe) {
            iframe.addEventListener("load", () => {

                requestAnimationFrame(() => {
                    main.style.opacity = 1;
                });
            });
        } else {
            // Fallback if iframe is not found

            requestAnimationFrame(() => {
                main.style.opacity = 1;
            });
    }
    })
    .catch(error => console.error('Error loading projects:', error));
});