function Redirigir(pagina) {
    window.location.href = `./${pagina}.html`;
}

function MostrarMenuLenguaje() {
    const menu = document.getElementById('MenuLenguaje');
    menu.style.display = 'block';
}

function OcultarMenuLenguaje() {
    const menu = document.getElementById('MenuLenguaje');
    menu.style.display = 'none';
}

function CambiarLenguaje(language) {
    const flag = document.getElementById('BanderaActual');
    if (language === 'es') {
        flag.src = './img/img_Botones/BotonEspanol.png';
    } else if (language === 'en') {
        flag.src = './img/img_Botones/BotonIngles.png';
    }
    localStorage.setItem('language', language);
    OcultarMenuLenguaje();
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('MenuLenguaje');
    const botonIdioma = document.querySelector('.Boton_Idioma');

    if (menu.style.display === 'block' && !menu.contains(event.target) && !botonIdioma.contains(event.target)) {
        OcultarMenuLenguaje();
    }
});

function RedirigirDonativos() {
    window.location.href = "Inicio.html?scrollDonativos=true";
}

function RedirigirPagina(pagina) {
    if (pagina === "Facebook") {
        window.open("https://www.facebook.com/people/Centro-de-Innovaci%C3%B3n-e-Inteligencia-para-el-Desarrollo-Inn-Chamba/100066933273041/?paipv=0&eav=AfZwHP4Bsf385q-OMBOIJABAzo4YLU8yEh3ElgaoV_lQcre75x7ExboK7fPelhyZNZo&_rdr", "_blank");
    } else if (pagina === "X") {
        window.open("https://twitter.com/iap_inn/media", "_blank");
    } else if (pagina === "Instagram") {
        window.open("https://www.instagram.com/innchamba/", "_blank");
    }
}