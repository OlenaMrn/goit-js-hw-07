import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);

const galleryMarkup = createGalleryCardsMarkup(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
   return galleryItems.map((galleryItem) => {
     return `<a class="gallery__item" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    alt="${galleryItem.description}"
  />
</a>`;
   }).join(``);
   
};

document.addEventListener("DOMContentLoaded", function () {
  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: 250,
  });
   
});


// gallery.addEventListener(`click`, onGalleryClick);



// function onGalleryClick(evt) {
// const target = evt.target;

// if (!target.classList.contains(`gallery__image`)) {
// return;
// }

// evt.preventDefault();

// var lightbox = new SimpleLightbox(".gallery a", {
//   captionSelector: `alt`,
//   captionDelay: 250
 
// });
// };


console.log(galleryItems);
