import { galleryItems } from './gallery-items.js';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const mainGallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

mainGallery.innerHTML = galleryItemsMarkup;

mainGallery.addEventListener('click', onClick);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250}); //!создаст слайдер с задержкой и подписью сверху

function createGalleryItems(galleryItems) { //!создание разметки из объекта
    const markup = galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description} />
        </a>
        `;
    }).join('');
    return markup;
}

function onClick(evt) { //? отмена действий от браузера по умолчанию
    evt.preventDefault();
}


