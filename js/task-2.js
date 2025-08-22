const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryContainer = document.querySelector(".gallery");

galleryContainer.style.display = "flex";
galleryContainer.style.flexWrap = "wrap";
galleryContainer.style.gap = "25px";
galleryContainer.style.listStyle = "none";
galleryContainer.style.justifyContent = "center";
galleryContainer.style.alignItems = "center";
galleryContainer.style.borderRadius = "8px";
galleryContainer.style.padding = "16px";
galleryContainer.style.maxWidth = "1280px";
galleryContainer.style.margin = "0 auto";



images.forEach(image => {
  const imgElement = document.createElement("img");
  imgElement.src = image.url;
  imgElement.alt = image.alt;
  galleryContainer.appendChild(imgElement);
});
