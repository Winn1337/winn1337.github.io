import { projects } from './projects.js';

function getProjectByTitle(title) {
    return projects.find(p => p.title === title);
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");

    const project = getProjectByTitle(title);
    const container = document.getElementById("project-detail");

    if (!project) {
        container.innerHTML = `<p>Project not found.</p>`;
        return;
    }

    container.innerHTML = `
    <h1>${project.title} ${project.year ? `(${project.year})` : ''}
    </h1><p><strong>Team Size:</strong> ${project.teamSize ?? 'N/A'}</p>
    <p><strong>Languages:</strong> ${project.language?.join(', ') || 'N/A'}</p>
    <br>
    ${project.fullDescription ? `${project.fullDescription}` : ''}
    `;
    
    // ${project.video ? `<iframe src="${project.video}" frameborder="0" allowfullscreen style="width:560px; height:315px; border-radius: 12px; margin: 1rem 0;"></iframe>` : ''}
    // <img src="${project.animatedThumbnail || project.staticThumbnail}" alt="${project.title}" style="width:100%; border-radius:12px; margin: 1rem 0;" />
});

// Fade in
document.addEventListener("DOMContentLoaded", () => {
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
});