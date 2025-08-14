const videoGallery = document.getElementById('video-gallery');

projects.forEach(project => {
    // Create a container for the video and its title
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    // Create and add the title
    const title = document.createElement('h3');
    title.textContent = project.title;
    videoContainer.appendChild(title);

    // Create and add the YouTube video embed
    const iframe = document.createElement('iframe');
    iframe.src = project.url;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);

    // Add the completed video container to the gallery
    videoGallery.appendChild(videoContainer);
});
