function showLiveStream() {
    // Get the full URL from the input field
    var videoURL = document.getElementById("videoLink").value;

    // Check if URL is empty
    if (videoURL) {
        // Validate the YouTube URL using regex
        var youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/;
        if (youtubeRegex.test(videoURL)) {
            // Convert the URL to embed format
            var embedURL = videoURL;

            // If the URL is from the full youtube.com URL, convert it to embed format
            if (videoURL.includes("youtube.com")) {
                embedURL = videoURL.replace("watch?v=", "embed/").split("&")[0];
            } else if (videoURL.includes("youtu.be")) {
                embedURL = videoURL.replace("youtu.be/", "youtube.com/embed/");
            }

            var iframe = document.getElementById("liveStream");

            // Update the iframe src
            iframe.src = embedURL + "?controls=0&modestbranding=1&showinfo=0&rel=0";
            iframe.style.display = "block"; // Show the iframe
        } else {
            alert("Please enter a valid YouTube video URL.");
        }
    } else {
        alert("Please paste a YouTube link.");
    }
}