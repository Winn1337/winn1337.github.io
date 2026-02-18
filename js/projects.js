import { projects } from '../js/project-data.js';

const container = document.getElementById("project-container");
if (container) {
    projects.filter(project => project.staticThumbnail)
    .forEach(project => {
        const card = document.createElement("a");
        card.classList.add("project-card");

        card.href = `project.html?title=${encodeURIComponent(project.title)}`;
        card.innerHTML = `
            <img src="${project.staticThumbnail}" alt="${project.title}" />
            <p></p>
            <h>${project.title} (${project.year})</h>
            <p>${project.summary}</p>
        `
        container.appendChild(card);
    });
}

document.body.classList.add("ready");