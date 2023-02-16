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



var lightbox = new SimpleLightbox(".gallery a", {
 captionsData: `alt`,
 captionDelay: 250,
 });




console.log(galleryItems);
