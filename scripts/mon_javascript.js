/* ================================ PAGE D'ACCUEIL ================================ */ 

// Message lors du téléchargement du CV
document.addEventListener("DOMContentLoaded", function () {
    const cvButton = document.querySelector(".btn-primary");
    cvButton.addEventListener("click", function () {
        alert("Merci d'avoir télécharger mon CV !");
    });
});

/* ================================ CONTACT ================================ */ 

// Validation du formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut (rechargement de la page)

    // Récupère le nom saisi
    const nameInput = document.getElementById("name");
    const userName = nameInput.value.trim(); // Supprime les espaces inutiles

    // Vérifie si le nom est rempli
    if (!userName) {
        alert("Veuillez entrer votre nom avant de soumettre le formulaire.");
        return;
    }

    // Affiche une alerte personnalisée
    alert(`Bonjour ${userName} ! Merci pour votre message. Nous vous répondrons rapidement.`);

    // Réinitialise le formulaire
    this.reset();
});


/* ================================ DARK MODE ================================ */ 

// Fonction pour activer le mode sombre
function enableDarkMode() {
    document.body.classList.add("dark-mode");

    // Remplacement des classes pour le mode sombre
    document.querySelectorAll(".bg-light").forEach((element) => {
        element.classList.replace("bg-light", "bg-secondary");
    });
    document.querySelectorAll(".text-dark").forEach((element) => {
        element.classList.replace("text-dark", "text-white");
    });

    // Appliquer des variables CSS personnalisées pour le texte
    document.body.style.setProperty("--main-text-color", "#f8f9fa");
    document.body.style.setProperty("--secondary-text-color", "#e0e0e0");

    // Sauvegarder l'état du mode sombre dans localStorage
    localStorage.setItem("darkMode", "enabled");
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    document.body.classList.remove("dark-mode");

    // Remplacement des classes pour revenir au mode clair
    document.querySelectorAll(".bg-secondary").forEach((element) => {
        element.classList.replace("bg-secondary", "bg-light");
    });
    document.querySelectorAll(".text-white").forEach((element) => {
        element.classList.replace("text-white", "text-dark");
    });

    // Réinitialiser des variables CSS personnalisées pour le texte
    document.body.style.setProperty("--main-text-color", "#333");
    document.body.style.setProperty("--secondary-text-color", "#555");

    // Sauvegarder l'état du mode clair dans localStorage
    localStorage.setItem("darkMode", "disabled");
}

// Gestion du bouton Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Vérification de l'état enregistré dans localStorage
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        darkModeToggle.checked = true; // Met à jour l'état du bouton
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


