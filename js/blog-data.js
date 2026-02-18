// Contains blog posts.
// This file is loaded in blog.js and blog-post.js.

export var blogPosts = [
    {
        title: "Dynamic Content on Static Sites",
        date: `18/02/2026`,
        body: `
        <p>
            Welcome to my first blog post! I'm not sure how to write a proper blog post, nor even what constitutes a blog post, but I have no better word for what this is. Just a place where I store my thoughts and ideas, hoping that someone else might find them useful... Anyways! My very first post is about how I load dynamic content (projects and blog posts) on my static site.
        </p>

        <p>
            Sometimes, you want to have a static site (like this one) but still want to be able to easily update your content without having to change the HTML structure of your   pages. One way to achieve this is by using JavaScript to fetch data from separate JS files and then render it on the page.
        </p>

        <p>
            In my case, I have two separate JS files: project-data.js and blog-data.js. These files contain arrays of objects representing my projects and blog posts, respectively. Each object has properties like title, summary, date, and body. Since these files are in separate JS files, they have to be loaded in to the page before I can access the data. To do this, I create a script element and set its src attribute to the path of the JS file. I also added a cache-busting query string to ensure that the latest version of the file is loaded.
        </p>

        <p>
            However, there are some types of content that I want users to be able to interact with, such as the comments section on blog posts. With a static website like mine, I don't have a backend server to handle form submissions and store comments in a database. To work around this, I use Google Sheets as a simple database to store comments, and Google Apps as the back-end to handle submissions. When a user submits a comment, the form data is sent to a Google Apps Script endpoint that I wrote, which then saves the comment to a Google Sheet. To display comments on the blog post page, I fetch the comments from the Google Sheet and render them dynamically using JS.
        </p>

        <p>
            I have to admit, this method is not the most efficient or secure way to handle dynamic content and user interactions, but it works for my needs and allows me to maintain a static site while still having some dynamic features. If you're interested in implementing something similar on your own static site, feel free to check out my code and reach out if you have any questions or suggestions!
        </p>
        `
    },
];