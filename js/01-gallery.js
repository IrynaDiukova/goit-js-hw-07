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
        data-source="${original}"
        alt="${description}"
        />
        </a>   
        </div>`;
    })
    .join('');
}   

let instance = "";
 
function onGalleryClick (event){
    event.preventDefault()

    if(event.target.nodeName !== 'IMG'){
    return;
    }
    instance = basicLightbox.create(
        `<img src=${event.target.dataset.source}>`
    );
    instance.show();

    document.addEventListener("keydown", onEscCloseModal);
    }

    function onEscCloseModal (event) {
        if (event.code === "Escape") {
            instance.close();
          document.addEventListener("keydown", onEscCloseModal);
    }
};



