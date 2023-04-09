// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// зробити рефакторинг коду???
const galleryList = document.querySelector('.gallery');
const createGalleryItem = ({ preview, original, description }) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`;

const galleryMarkup = galleryItems.map(item => createGalleryItem(item)).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const onGalleryClick = (evt) => {
    evt.preventDefault();

    const imageEl = evt.target.classList.contains('gallery__image');
    if (!imageEl) {
        return;
    }

    const originalSrc = evt.target.dataset.source;
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.open({ items: [originalSrc] });
};

galleryList.addEventListener('click', onGalleryClick);

console.log(galleryItems);
