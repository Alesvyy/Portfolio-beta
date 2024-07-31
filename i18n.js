// i18n.js

// Traducciones en español e inglés
const translations = {
    en: {
        "name": "Alejandro Soto",
        "jobTitle": "Full Stack Web Developer",
        "contactMe": "Contact me",
        "projectsTitle": "Projects",
        "loginPrompt": "Login with username 'guestUser' and password 'SuperSecretPass'.",
        "projectDescription": "A feature-rich music application developed in Java and Java Swing, capable of playing .WAV files. It includes login, registration, and the ability to add custom songs to the playlist. Its intuitive interface allows for efficient management and enjoyment of your music collection.",
        "repository": "Repository",
        "techStackTitle": "Stack",
        "aboutMeTitle": "About me",
        "aboutMeIntro": "I'm Alejandro Soto Viquez, a programming technician from the Colegio Técnico Profesional CIT and a student at University CENFOTEC.",
        "aboutMeDescription": "I specialize in software and web development and enjoy creating innovative solutions. My goal is to contribute to exciting and challenging projects.",
        "downloadCV": "Download CV in PDF",
        "programming": "Programming",
        "database": "Database",
        "design": "Design",
        "contactTitle": "Contact",
        "socialContact": "Social",
        "telephoneContact": "Telephone",
        "emailContact": "Email",
        "scrollToTop": "Back"
    },
    es: {
        "name": "Alejandro Soto",
        "jobTitle": "Desarrollador Web Full Stack",
        "contactMe": "Contáctame",
        "projectsTitle": "Proyectos",
        "loginPrompt": "Inicia sesión con el usuario 'guestUser' y la contraseña 'SuperSecretPass'.",
        "projectDescription": "Una aplicación de música desarrollada en Java y Java Swing, que reproduce archivos .WAV. Incluye inicio de sesión, registro y la opción de agregar canciones personalizadas a la lista de reproducción. Su interfaz intuitiva permite gestionar y disfrutar de la música de manera eficiente.",
        "repository": "Repositorio",
        "techStackTitle": "Tecnologías",
        "aboutMeTitle": "Sobre mí",
        "aboutMeIntro": "Soy Alejandro Soto Viquez, un técnico en programación del Colegio Técnico Profesional CIT y estudiante en Universidad CENFOTEC.",
        "aboutMeDescription": "Me especializo en software y desarrollo web y disfruto creando soluciones innovadoras. Mi objetivo es contribuir a proyectos apasionantes y desafiantes.",
        "downloadCV": "Descargar CV en PDF",
        "programming": "Programación",
        "database": "Base de datos",
        "design": "Diseño",
        "contactTitle": "Contacto",
        "socialContact": "Redes",
        "telephoneContact": "Teléfono",
        "emailContact": "Correo",
        "scrollToTop": "Volver"
    }
};


// Cambia el idioma del contenido
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Maneja el cambio de idioma al hacer clic en el selector
document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const lang = button.getAttribute('data-lang');
        setLanguage(lang);
    });
});
