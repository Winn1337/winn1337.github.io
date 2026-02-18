import('../js/blog-data.js')
    .then(module => {
        const blogPosts = module.blogPosts;

        const container = document.getElementById("blog-container");
        if (!container) return;

        blogPosts
            .filter(post => post.body)
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

        document.body.classList.add("ready");
    })
    .catch(error => console.error('Error loading blog posts:', error));