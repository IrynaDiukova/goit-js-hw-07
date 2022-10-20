import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

imageContainer.addEventListener('click', onGalleryClick)

function createImageMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src ="${preview}"
        alt="${description}"
        />
        </a>   
        </div>`;

    })
    .join('');
}   

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    });


 
function onGalleryClick (event){
    event.preventDefault()   
};