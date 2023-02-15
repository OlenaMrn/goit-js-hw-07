import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(`.gallery`);
const galleryLink = document.querySelector(".gallery__link");

const galleryMarkup = createGalleryCardsMarkup(galleryItems);
gallery.insertAdjacentHTML(`beforeend`, galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map((galleryItem) => {
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
    })
    .join(``);
}

gallery.addEventListener(`click`, onGalleryClick);

function onGalleryClick(evt) {
  const target = evt.target;
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const original = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${original}" width="1400" height="900">
`);

  instance.show();

  gallery.addEventListener(`keydown`, onClose);

  function onClose(evt) {
    // console.log(evt);
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

// console.log(galleryItems);
