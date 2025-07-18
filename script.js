document.addEventListener("DOMContentLoaded", function () {
    // --- Galerie ---
    const galerieLink = document.getElementById("galerie-link");
    const galleryContainer = document.getElementById("galerie");
    const gallery = document.querySelector(".gallery");
    const zavritBtn = document.getElementById("zavrit-galerii");

    const images = [
        { src: "1.jpg", alt: "Příprava stěny před aplikací" },
        { src: "2.jpg", alt: "Druhá vrstva stěrky" },
        { src: "3.jpg", alt: "Odstranění původní malby" },
        { src: "4.jpg", alt: "Druhá vrstva stěrky pod malbu" },
        { src: "5.jpg", alt: "Samonosná konstrukce stropu" },
        { src: "6.jpg", alt: "Vysokopevnostní sádrokarton Habito H" },
        { src: "7.jpg", alt: "Vizualizace koupelny" }, 
  { src: "8.jpg", alt: "Q1-základní tmelení podhledu" }, 
  { src: "9.jpg", alt: "Drywall Stilts" }
    ];

    function loadGallery(images) {
        images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = `obrazky/${image.src}`;
            imgElement.alt = image.alt;
            imgElement.loading = "lazy";

            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");

            const caption = document.createElement("p");
            caption.textContent = image.alt;

            galleryItem.appendChild(imgElement);
            galleryItem.appendChild(caption);
            gallery.appendChild(galleryItem);
        });
    }

    galerieLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (gallery.children.length === 0) {
            loadGallery(images);
        }
        galleryContainer.style.display = "block";
        window.location.hash = "#galerie";
    });

    if (zavritBtn) {
        zavritBtn.addEventListener("click", function () {
            galleryContainer.style.display = "none";
        });
    }

    // --- FAQ --- (každá otázka lze rozbalit/sbalit zvlášť)
    document.querySelectorAll('.faq-question').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            btn.classList.toggle('active');
            answer.classList.toggle('active');
            icon.textContent = btn.classList.contains('active') ? '×' : '+';
        });
    });

    // --- Přepínač světlý / tmavý režim ---
    const toggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "Světlý režim";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        toggleBtn.textContent = isDark ? "Světlý režim" : "Tmavý režim";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // --- Odeslání formuláře ---
    document.querySelector('form[name="kontakt-formular"]').addEventListener('submit', function() {});
});