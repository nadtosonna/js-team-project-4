import getRefs from "./common/refs";

const { modal, moviesGallery } = getRefs()

moviesGallery.addEventListener('click', (e) => {
  console.log(e)
})