var projects;

function getProjectByTitle(title) {
    return projects.find(p => p.title === title);
}

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
            projects = module.projects;
            const params = new URLSearchParams(window.location.search);
            const title = params.get("title");
            const project = getProjectByTitle(title);
            const container = document.getElementById("project-detail");

            if (!project) {
                container.innerHTML = `<p>Project not found.</p>`;
                return;
            }
            document.title = `${project.title}`;
            
            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = `${project.staticThumbnail}`;

            container.innerHTML = `
            
            <h1>${project.title} ${project.year ? `(${project.year})` : ''}</h1>
            <p style="margin-top: -15px; margin-bottom: 30px"><i>${project.summary}</i></p>
            <p><strong>Team Size:</strong> ${project.teamSize ?? 'N/A'}</p>
            <p><strong>Languages:</strong> ${project.language?.join(', ') || 'N/A'}</p>
            <img src="${project.staticThumbnail}" style="position: absolute; top: 66px; right: 25%; width: 400px; height: auto; z-index: 0; border-radius:6px;"/>
            <br><br><br><br><br><br><br>
            ${project.fullDescription ? `${project.fullDescription}` : ''}
            `;
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