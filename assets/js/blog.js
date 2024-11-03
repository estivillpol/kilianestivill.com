const posts = [
    {
        title: "Article 1",
        date: "2024-10-01",
        image: "path/to/image1.jpg",
        description: "Resum de l'article 1.",
        link: "blog/article1.html"
    },
    {
        title: "Article 2",
        date: "2024-09-15",
        image: "path/to/image2.jpg",
        description: "Resum de l'article 2.",
        link: "blog/article2.html"
    },
    {
        title: "Article 3",
        date: "2024-09-01",
        image: "path/to/image3.jpg",
        description: "Resum de l'article 3.",
        link: "blog/article3.html"
    },
    // Afegir més articles aquí
];

// Funció per mostrar els articles al blog
function loadBlogPosts() {
    const contentSection = document.getElementById('content');
    const footerSection = document.getElementById('footer-latest-posts');
    contentSection.innerHTML = '';
    footerSection.innerHTML = '';

    // Mostrar els últims articles
    posts.slice(0, 3).forEach(post => {
        const postElement = `
            <div class="post">
                <img src="${post.image}" alt="${post.title}" />
                <h3><a href="${post.link}">${post.title}</a></h3>
                <p>${post.date}</p>
                <p>${post.description}</p>
            </div>
        `;
        contentSection.innerHTML += postElement;

        // Afegir al footer
        const footerElement = `
            <div class="footer-post">
                <h4><a href="${post.link}">${post.title}</a></h4>
                <p>${post.date}</p>
            </div>
        `;
        footerSection.innerHTML += footerElement;
    });
}

// Funció de cerca
function searchPosts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const postsElements = document.querySelectorAll('.post');

    postsElements.forEach(post => {
        const postTitle = post.querySelector('h3').innerText.toLowerCase();
        post.style.display = postTitle.includes(searchInput) ? '' : 'none';
    });
}

// Càrrega dels posts en obrir la pàgina
window.onload = loadBlogPosts;
