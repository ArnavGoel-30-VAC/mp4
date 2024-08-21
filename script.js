// MP4 Video Player Functionality
const fileInput = document.getElementById('fileInput');
const videoPlayer = document.getElementById('videoPlayer');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        videoPlayer.style.display = 'block';
        videoPlayer.play();
        
        // Clear YouTube video
        document.getElementById('videoContainer').innerHTML = '';
    }
});

// YouTube Video Player Functionality
document.getElementById('loadVideo').addEventListener('click', function() {
    const videoInput = document.getElementById('videoInput').value.trim();
    const videoContainer = document.getElementById('videoContainer');
    
    // Extract YouTube video ID from full URL or use as is
    let videoID;
    const urlPattern = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = videoInput.match(urlPattern);

    if (match && match[1].length == 11) {
        videoID = match[1];
    } else {
        videoID = videoInput;
    }

    if (videoID) {
        videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>`;
        
        // Clear MP4 video
        videoPlayer.src = '';
        videoPlayer.style.display = 'none';
    } else {
        alert("Please enter a valid YouTube video ID or URL.");
    }
});
