// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

const cardsMarkup = createGalleryMarkup(galleryItems);

refs.galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img class="gallery__image"
   src="${preview} "
   data-source="${original} "
   alt="${description} "/>
</a>
</div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
