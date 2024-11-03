document.addEventListener("DOMContentLoaded", function() {
    fetch('https://medium.com/feed/@akashoffical33')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = Array.from(data.getElementsByTagName("item")).slice(0, 3);
            const updatesList = document.querySelector('.updates');
            items.forEach(item => {
                const title = item.getElementsByTagName("title")[0].textContent;
                const link = item.getElementsByTagName("link")[0].textContent;
                const pubDate = new Date(item.getElementsByTagName("pubDate")[0].textContent);
                const formattedDate = pubDate.toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                });

                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <p><a href="${link}" target="_blank">${title}</a></p>
                    <span class="timestamp">Posted on ${formattedDate}</span>
                `;
                updatesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching Medium feed:', error));
});
