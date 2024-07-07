document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'images/flowers-pink', alt: 'Pink Flowers', info: 'A beautiful pink flower.' },
        { src: 'images/flowers-purple', alt: 'Purple Flowers', info: 'A vibrant purple flower.' },
        { src: 'images/flowers-red', alt: 'Red Flowers', info: 'A striking red flower.' },
        { src: 'images/flowers-white', alt: 'White Flowers', info: 'A delicate white flower.' },
        { src: 'images/flowers-yellow', alt: 'Yellow Flowers', info: 'A sunny yellow flower.' }
    ];

    const featuredImage = document.querySelector('figure img');
    const figcaption = document.querySelector('figcaption');
    const thumbnailsContainer = document.getElementById('thumbnails');

    images.forEach(image => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `${image.src}-small.jpg`;
        img.alt = `Thumbnail of ${image.alt}`;
        img.dataset.info = image.info;
        li.appendChild(img);
        thumbnailsContainer.appendChild(li);
    });

    const thumbnails = document.querySelectorAll('ul li img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const largeImageSrc = thumbnail.src.replace('small', 'large');
            featuredImage.src = largeImageSrc;
            featuredImage.alt = `Featured Image of ${thumbnail.alt}`;
            figcaption.textContent = thumbnail.dataset.info;

            thumbnails.forEach(img => img.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

    // Set initial active thumbnail
    thumbnails[0].classList.add('active');
});
