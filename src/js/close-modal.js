

const backdropREF = document.querySelector(".backdrop");

window.addEventListener("keydown", closeModalWindow);
backdropREF.addEventListener("click", closeModalWindow);

function closeModalWindow(event) {
    if (event.code === 'Escape' || event.target === backdropREF) {
        backdropREF.classList.add("is-hidden");
        window.removeEventListener("keydown", closeModalWindow);
        backdropREF.removeEventListener("click", closeModalWindow);
    }
}

