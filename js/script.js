// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Array of image objects with their source, alternative text, and information
    const images = [
        { src: 'images/flowers-pink', alt: 'Pink Flowers', info: 'A beautiful pink flower.' },
        { src: 'images/flowers-purple', alt: 'Purple Flowers', info: 'A vibrant purple flower.' },
        { src: 'images/flowers-red', alt: 'Red Flowers', info: 'A striking red flower.' },
        { src: 'images/flowers-white', alt: 'White Flowers', info: 'A delicate white flower.' },
        { src: 'images/flowers-yellow', alt: 'Yellow Flowers', info: 'A sunny yellow flower.' }
    ];

    // Select the featured image and its caption element
    const featuredImage = document.querySelector('figure img');
    const figcaption = document.querySelector('figcaption');
    // Select the container for thumbnails
    const thumbnailsContainer = document.getElementById('thumbnails');

    // Loop through the images array and create thumbnails
    images.forEach(image => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `${image.src}-small.jpg`; // Set the source for the thumbnail image
        img.alt = `Thumbnail of ${image.alt}`; // Set the alt text for the thumbnail image
        img.dataset.info = image.info; // Store the image info in a data attribute
        li.appendChild(img); // Append the image to the list item
        thumbnailsContainer.appendChild(li); // Append the list item to the thumbnails container
    });

    // Select all the thumbnail images
    const thumbnails = document.querySelectorAll('ul li img');

    // Add click event listeners to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const largeImageSrc = thumbnail.src.replace('small', 'large'); // Replace 'small' with 'large' in the image source
            featuredImage.src = largeImageSrc; // Update the featured image source
            featuredImage.alt = `Featured Image of ${thumbnail.alt}`; // Update the alt text of the featured image
            figcaption.textContent = thumbnail.dataset.info; // Update the caption text with the image info

            // Remove the 'active' class from all thumbnails and add it to the clicked thumbnail
            thumbnails.forEach(img => img.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

    // Set the first thumbnail as active initially
    thumbnails[0].classList.add('active');
});
