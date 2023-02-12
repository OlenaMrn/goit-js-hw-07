import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(`.gallery`);
const galleryLink = document.querySelector(".gallery__link");

const galleryMarkup = createGalleryCardsMarkup(galleryItems);
gallery.insertAdjacentHTML(`beforeend`, galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
   return galleryItems.map((galleryItem) => {
     return `<div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </div>`;
   }).join(``);
   
};

gallery.addEventListener(`click`, onGalleryClick);



function onGalleryClick(evt) {
const target = evt.target;

if (!target.classList.contains(`gallery__image`)) {
return;
}

evt.preventDefault();

const original = target.dataset.source;

basicLightbox
.create(
`<img width="1400" height="900" src="${original}">`)
.show();
};
    


// console.log(galleryItems);



