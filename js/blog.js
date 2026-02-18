import { blogPosts } from '../js/blog-data.js';

const container = document.getElementById("blog-container");
if (container) {
    blogPosts.filter(post => post.body)
    .forEach(post => {
        const card = document.createElement("a");
        card.classList.add("blog-card");
        let shortDescription = post.body
            .replace(/<[^>]+>/g, '')
            .substring(0, 75);
        if (shortDescription.length === 75) {
            shortDescription += '...';
        }
        card.href = `blog-post.html?title=${encodeURIComponent(post.title)}`;
        card.innerHTML = `
            <h2>${post.title}</h2>
            <small>${post.date}</small>
            <p>${shortDescription}</p>
        `;
        container.appendChild(card);
    });
}
document.body.classList.add("ready");