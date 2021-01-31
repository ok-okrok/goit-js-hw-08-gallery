"use strict";

import images from "./gallery-items.js";

const refs = {
    gallery: document.querySelector(".js-gallery"),
    image: document.createElement("img"),
    lightbox: document.querySelector(".lightbox"),
    btn: document.querySelector('[data-action="close-lightbox"]'),
    modal: document.querySelector(".lightbox__content"),
    lightbox__image: document.querySelector(".lightbox__image"),
};

const createGalleryItem = ({ preview, original, description }) =>
`<li class="gallery__item">
<a class="gallery__link" href=${original}>
<img
  class="gallery__image"
  src=${preview}
  data-source=${original}
  alt=${description}/>
  </a>
  </li>`;

const galleryMarkup = images.reduce((acc, item) => acc + createGalleryItem(item),"");

refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

refs.gallery.addEventListener("click", onGalleryClick);
refs.btn.addEventListener("click", onClickHandlerClose);
refs.modal.addEventListener("click", closeLightbox);

function onGalleryClick(elem) {
  elem.preventDefault();
  if (elem.target.nodeName !== 'IMG') return;
  if (elem.target.nodeName === 'IMG') {
    refs.lightbox.classList.add("is-open");
    refs.lightbox__image.src = elem.target.getAttribute("data-source");
    refs.lightbox__image.alt = elem.target.alt;
  };
  window.addEventListener("keyup", clickKey);
};

function onClickHandlerClose() {
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
  window.removeEventListener("keyup", clickKey);
}

function closeLightbox(event) {
  if (event.target === event.currentTarget) {
    onClickHandlerClose();
  };
}

function clickKey(event) {
  console.log(event.code)
  if (event.code === "Escape") {
    onClickHandlerClose();
  };

  if (event.code === "ArrowRight") {
    newPicture(event);
  };
}

// let a = refs.gallery.childElementCount;
// console.log(a);

// const b = document.querySelectorAll(".gallery__image");
// console.log(b);

// let x = 0;
// b.forEach(element => {
//   x += 1;
//   element.classList.add(x);
// });

// function newPicture() {
//   refs.lightbox__image.class = refs.lightbox__image.class + 1;
//   console.log(brefs.lightbox__image.class);
//   refs.lightbox__image.src = elem.target.getAttribute("data-source")
// }

// console.table(galleryMarkup);




// function clickKeyRight (event) {
//   if (event.code === "Right") {
//     console.log('ura');
//   };
// }

