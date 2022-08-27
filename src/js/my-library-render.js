import { getCardTemplate } from './get-templates';
import { getGenresList } from './main-page-render';
import getRefs from './common/refs';
import { markupEmptyTemplate } from './make-empty-template-my-library'


// const moviesGalleryREF = document.querySelector(".movies-gallery")
// console.log(moviesGalleryREF);
const watchedBtn = document.querySelector("[data-name=Watched]");
console.log(watchedBtn);
// const myLibraryREF = document.querySelector("[data-name=library]");
// console.log(myLibraryREF);

const { moviesGallery, library } = getRefs();
// const {library} = getRefs();
// let parse = null;

// function reduceObjectBec() {
//     parse =  JSON.parse(localStorage.getItem("films"));
//     const reduce = parse.reduce((acc, film) => acc + getCardTemplate(film, getGenresList()), "")
//     moviesGallery.insertAdjacentHTML("afterbegin", reduce)
// }

function reduceWatcedFilms(array) {
    return array.reduce((acc, film) => acc + getCardTemplate(film, getGenresList()), "")
}

function renderWatcedFilms(array) {
    return moviesGallery.insertAdjacentHTML("afterbegin", reduceWatcedFilms(array))
}


library.addEventListener("click", onMyLibraryClick);

function onMyLibraryClick() {
    moviesGallery.innerHTML = "";
    const myLibraryStorage = JSON.parse(localStorage.getItem("films"));
    
    if (myLibraryStorage) {
        renderWatcedFilms(myLibraryStorage);
    } else {
        moviesGallery.insertAdjacentHTML('beforeend', markupEmptyTemplate());;
    }
}
