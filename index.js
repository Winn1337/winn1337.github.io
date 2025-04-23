fetch('./projects.js?v=' + new Date().getTime())
    .then(response => response.json())
    .then(data => {
        const projects = data;

        const container = document.getElementById("project-container");
        if (!container) return;

        projects.forEach(project => {
            const card = document.createElement("a");
            card.classList.add("project-card");
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

// document.addEventListener("DOMContentLoaded", () => {

//     const container = document.getElementById("project-container");

//     if (!container) return;

//     projects.forEach(project => {
//         const card = document.createElement("a");
//         card.classList.add("project-card");
//         card.href = `project.html?title=${encodeURIComponent(project.title)}`;
//         card.innerHTML = `
//         <img src="${project.staticThumbnail}" alt="${project.title}" />
//         <p></p>
//         <h>${project.title} (${project.year})</h>
//         <p>${project.summary}</p>
//     `;

//         container.appendChild(card);
//     });

//     const main = document.querySelector("body");
//     const iframe = document.querySelector("iframe");

//     if (iframe) {
//         iframe.addEventListener("load", () => {

//             requestAnimationFrame(() => {
//                 main.style.opacity = 1;
//             });
//         });
//     } else {
//         // Fallback if iframe is not found

//         requestAnimationFrame(() => {
//             main.style.opacity = 1;
//         });
//     }
// });