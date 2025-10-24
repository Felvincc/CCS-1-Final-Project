// --- GALLERY 1 ---
const images1 = [
  "img/belltower.jpg",
  "img/SU Hall.png",
  "img/quezon park new.jpg",
  "img/port new.jpg",
  "img/Sans Rival.jpg",
  "img/portal crossing.jpg",
  "img/capitol.jpg",
  "img/quezon park2.jpg",
  "img/traffic light.jpg",
  "img/catholicchurch.jpg",
  "img/downtownpt2.jpg",
  "img/robinsons new.jpg",
];

const labels1 = [
  "Dumaguete Bell Tower",
  "Silliman University Hall",
  "Quezon Park (New)",
  "Dumaguete Port (New)",
  "Sans Rival Cakes & Pastries",
  "Sillman Crossing",
  "Negros Oriental Capitol",
  "Quezon Park (Alternate View)",
  "1st Traffic Light",
  "Catholic Church",
  "Downtown Area",
  "Robinsons Place (New)"
];

let startIndex1 = 0;
const imagesPerPage1 = 4;
const gallery1 = document.getElementById("gallery1");


const colors1 = ["#f8bbd0", "#bbdefb", "#c8e6c9", "#fff9c4"];
let colorIndex1 = 0;

function updateImages1() {gallery1.innerHTML = "";
    const currentImages = images1.slice(startIndex1, startIndex1 + imagesPerPage1);
    const currentLabels = labels1.slice(startIndex1, startIndex1 + imagesPerPage1);

  currentImages.forEach((imgSrc, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");

    const img = document.createElement("img");
    img.src = imgSrc;

    const label = document.createElement("p");
    label.textContent = currentLabels[index];
    label.classList.add("image-label");

    wrapper.appendChild(img);
    wrapper.appendChild(label);
    gallery1.appendChild(wrapper);
  });
}

function showImages1(withAnimation = false) {
  if (withAnimation) {
    gallery1.classList.add("fade-out");
    setTimeout(() => {
      updateImages1();
      gallery1.classList.remove("fade-out");
      gallery1.classList.add("fade-in");
      setTimeout(() => gallery1.classList.remove("fade-in"), 500);
    }, 400);
  } else updateImages1();
}

function nextImages1() {
  startIndex1 += imagesPerPage1;
  if (startIndex1 >= images1.length) startIndex1 = 0;
  showImages1(true);
  changeBackground1();
}

function prevImages1() {
  startIndex1 -= imagesPerPage1;
  if (startIndex1 < 0) startIndex1 = Math.max(0, images1.length - imagesPerPage1);
  showImages1(true);
}

function changeBackground1() {
  colorIndex1 = (colorIndex1 + 1) % colors1.length;
  document.body.style.backgroundColor = colors1[colorIndex1];
}

showImages1();


// --- GALLERY 2 ---
const images2 = [
  "img/Cathedral before.jpg",
  "img/SU hall before.png",
  "img/quezon park old.png",
  "img/port before.jpg",
  "img/tree.jpg",
  "img/Dumagetme sign.jpg",
  "img/Pantawan.png",
  "img/national museum.jpg",
  "img/overview shot.jpg",
  "img/downtown.jpg",
  "img/pirate ship.jpg", 
  "img/old robinsons.jpeg"
];


const labels2 = [
  "Cathedral (Old)",
  "Silliman Hall (Old)",
  "Quezon Park (Old)",
  "Dumaguete Port (Before)",
  "Tree by the Boulevard",
  "Dumaguete Sign",
  "Pantawan Area",
  "National Museum",
  "City Overview Shot",
  "Downtown Dumaguete",
  "Pirate Ship",
  "Robinsons Place (Old)"
];

let startIndex2 = 0;
const imagesPerPage2 = 4;
const gallery2 = document.getElementById("gallery2");


const colors2 = ["#d1c4e9", "#ffccbc", "#b2dfdb", "#ffe0b2"];
let colorIndex2 = 0;

function updateImages2() {
  gallery2.innerHTML = "";
  const currentImages = images2.slice(startIndex2, startIndex2 + imagesPerPage2);
  const currentLabels = labels2.slice(startIndex2, startIndex2 + imagesPerPage2);


  currentImages.forEach((imgSrc, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");


    const img = document.createElement("img");
    img.src = imgSrc;

    const label = document.createElement("p");
    label.textContent = currentLabels[index];
    label.classList.add("image-label");

    wrapper.appendChild(img);
    wrapper.appendChild(label);
    gallery2.appendChild(wrapper);
  });
}

function showImages2(withAnimation = false) {
  if (withAnimation) {
    gallery2.classList.add("fade-out");
    setTimeout(() => {
      updateImages2();
      gallery2.classList.remove("fade-out");
      gallery2.classList.add("fade-in");
      setTimeout(() => gallery2.classList.remove("fade-in"), 500);
    }, 400);
  } else updateImages2();
}

function nextImages2() {
  startIndex2 += imagesPerPage2;
  if (startIndex2 >= images2.length) startIndex2 = 0;
  showImages2(true);
  changeBackground2();
}

function prevImages2() {
  startIndex2 -= imagesPerPage2;
  if (startIndex2 < 0) startIndex2 = Math.max(0, images2.length - imagesPerPage2);
  showImages2(true);
}

function changeBackground2() {
  colorIndex2 = (colorIndex2 + 1) % colors2.length;
  document.body.style.backgroundColor = colors2[colorIndex2];
}

showImages2();

function nextvideo(VideoId) {
  const iframe = document.getElementById("ytPlayer");
  iframe.src = `https://www.youtube.com/embed/${VideoId}?autoplay=1`;
}

  

/* 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-jXZ1IqEraY?si=R5LkF3E6HMSeA2vq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/
