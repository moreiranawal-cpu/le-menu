const visionneuse = document.getElementById("visionneuse");
const imageAgrandie = document.getElementById("image-agrandie");
const nomAgrandie = document.getElementById("nom-agrandi");
const prixAgrandie = document.getElementById("prix-agrandi");
const boutonFermer = document.getElementById("fermer");

document.querySelectorAll(".image-box img").forEach(image => {
    image.addEventListener("click", () => {
        imageAgrandie.src = image.src;
        imageAgrandie.alt = image.alt;

        nomAgrandie.textContent = image.dataset.nom;
        prixAgrandie.textContent = image.dataset.prix;

        visionneuse.classList.add("active");
        visionneuse.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        boutonFermer.focus();
    });
});

function fermerImage() {
    visionneuse.classList.remove("active");
    visionneuse.setAttribute("aria-hidden", "true");

    imageAgrandie.src = "";
    document.body.style.overflow = "";
}

boutonFermer.addEventListener("click", fermerImage);

visionneuse.addEventListener("click", event => {
    if (event.target === visionneuse) {
        fermerImage();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        fermerImage();
    }
});
