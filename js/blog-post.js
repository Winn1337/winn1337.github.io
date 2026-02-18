import Papa from "https://cdn.jsdelivr.net/npm/papaparse@5.4.1/+esm";
var blogPosts;

function getBlogPostByTitle(title) {
    return blogPosts.find(p => p.title === title);
}

import('../js/blog-data.js?v=' + new Date().getTime())
    .then(module => {
        blogPosts = module.blogPosts;
        const params = new URLSearchParams(window.location.search);
        const title = params.get("title");
        const post = getBlogPostByTitle(title);
        const container = document.getElementById("blog-post");
        if (!post) {
            container.innerHTML = `<p>Blog post not found.</p>`;
            return;
        }
        document.title = `${post.title}`;
        container.innerHTML = `
        <h1>${post.title}</h1>
        <div class="post-date">${post.date}</div>
        ${post.body ? `${post.body}` : ''}
        `;
    })
    .catch(error => console.error('Error loading blog posts:', error))
    .then(() => {
        // After projects are loaded and rendered, add the "ready" class to trigger the fade-in effect
        document.body.classList.add("ready");
    })
    .then(() => {

    loadComments();

    const form = document.getElementById("commentForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const data = {
            postId: document.title,
            name: formData.get("name"),
            comment: formData.get("comment")
        };

        await fetch("https://script.google.com/macros/s/AKfycbys4FZf-ljvQeWtcrj1TJpvnIJDIRRVBHKttEaBMgiNZzrOEB_dpTKGkCaT95fnMRuH8w/exec", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
        });

        alert("Success! Your comment has been submitted and awaits approval.");
        form.reset();
    });
});

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vROGUCtX2jWWdYGkgvK6qhSSPDDY9tJmWbVQgx5dDfCFi5BEYSBil-g8sMKf-kkfkUaoLRQxOm4PGhm/pub?output=csv";
async function loadComments() {
    Papa.parse(`${CSV_URL}`, {
        download: true,
        header: true,
        skipEmptyLines: true,
        downloadRequestHeaders: {
          "Cache-Control": "no-cache"
        },
        downloadRequestBody: null,
        complete: function(results) {
            const commentsContainer = document.getElementById("comments");
            commentsContainer.innerHTML = "";
            
            // Filter rows for current postId and approved
            const filtered = results.data.filter(row => 
                row.PostId === document.title && row.Approved.toLowerCase() === "approved"
            );
            
            filtered.forEach(row => {
                const commentEl = document.createElement("div");
                const nameEl = document.createElement("strong");
                nameEl.textContent = row.Name;
                commentEl.appendChild(nameEl);
                const timeEl = document.createElement("small");
                timeEl.textContent = `  ${row.Timestamp}`;
                timeEl.className = "comment-time";
                commentEl.appendChild(timeEl);
                const commentText = document.createElement("p");
                commentText.textContent = row.Comment;
                commentEl.appendChild(commentText);
                commentsContainer.appendChild(commentEl);
            });
        },
        error: function(err) {
            alert("Error loading comments:", err);
        }
    });
}