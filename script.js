// Array of image URLs
const images = [
  "Sans Rival.jpg",
  "vettel.jpg",
  "SU hall.png",
  "Pantawan.png",
  "Cathedral before.jpg",
  "SU hall before.png",
  "quezon park new.jpg",
  "quezon park old.png",
  "port before.jpg",
  "Dumagetme sign.jpg",
  "Dumaguete City Maps.png",
  "vettel.jpg",
];

// Variables for pagination
let startIndex = 0;
const imagesPerPage = 4;

// Get the gallery container
const gallery = document.getElementById("gallery");

// Function to display 4 images at a time
function showImages() {
  gallery.innerHTML = ""; // Clear previous images

  // Get the 4 images for the current "page"
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  // Create and add image elements
  currentImages.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    gallery.appendChild(img);
  });
}

//Go to next 4 images//

function nextImages() {
    startIndex += imagesPerPage;
    if (startIndex >= images.length) {
    startIndex = 0; //Loop back to start
    }
    showImages();
}

// Go to previous 4 images
function prevImages() {
  startIndex -= imagesPerPage;
  if (startIndex < 0) {
    startIndex = Math.max(0, images.length - imagesPerPage); // Go to last set
  }
  showImages();
}

// Initial display
showImages();