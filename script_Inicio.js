/* Variables Gloables*/
const ciudades = [
    { value: "cdmx", text: "CDMX" },
    { value: "aguascalientes", text: "Aguascalientes" },
    { value: "baja_california", text: "Baja California" },
    { value: "baja_california_sur", text: "Baja California Sur" },
    { value: "campeche", text: "Campeche" },
    { value: "chiapas", text: "Chiapas" },
    { value: "chihuahua", text: "Chihuahua" },
    { value: "coahuila", text: "Coahuila" },
    { value: "colima", text: "Colima" },
    { value: "durango", text: "Durango" },
    { value: "guanajuato", text: "Guanajuato" },
    { value: "guerrero", text: "Guerrero" },
    { value: "hidalgo", text: "Hidalgo" },
    { value: "jalisco", text: "Jalisco" },
    { value: "mexico", text: "Estado de México" },
    { value: "michoacan", text: "Michoacán" },
    { value: "morelos", text: "Morelos" },
    { value: "nayarit", text: "Nayarit" },
    { value: "nuevo_leon", text: "Nuevo León" },
    { value: "oaxaca", text: "Oaxaca" },
    { value: "puebla", text: "Puebla" },
    { value: "queretaro", text: "Querétaro" },
    { value: "quintana_roo", text: "Quintana Roo" },
    { value: "san_luis_potosi", text: "San Luis Potosí" },
    { value: "sinaloa", text: "Sinaloa" },
    { value: "sonora", text: "Sonora" },
    { value: "tabasco", text: "Tabasco" },
    { value: "tamaulipas", text: "Tamaulipas" },
    { value: "tlaxcala", text: "Tlaxcala" },
    { value: "veracruz", text: "Veracruz" },
    { value: "yucatan", text: "Yucatán" },
    { value: "zacatecas", text: "Zacatecas" }
];

const imagenes = [
    './img/Inicio/img_Aliados/AliadoUno.svg',
    './img/Inicio/img_Aliados/AliadoDos.svg',
    './img/Inicio/img_Aliados/AliadoTres.svg',
    './img/Inicio/img_Aliados/AliadoCuatro.svg',
    './img/Inicio/img_Aliados/AliadoCinco.svg',
    './img/Inicio/img_Aliados/AliadoSeis.svg',
    './img/Inicio/img_Aliados/AliadoSiete.svg',
    './img/Inicio/img_Aliados/AliadoOcho.svg'
];

let indiceActual = 0;
const selectElement = document.getElementById('ciudad');

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('scrollDonativos') === 'true') {
        window.scrollTo(0, 0);

        setTimeout(function() {
            document.getElementById('SeccionDonativos').scrollIntoView({
                behavior: 'smooth'
            });
        }, 500);
    }
};

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

ciudades.forEach(ciudad => {
    const option = document.createElement('option');
    option.value = ciudad.value;
    option.textContent = ciudad.text;
    selectElement.appendChild(option);
});

function CambiarImagen() {
    const imagen = document.getElementById('Imagen_principal');

    indiceActual++;
    
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    imagen.src = imagenes[indiceActual];
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

function ScrollToDonativos() {
    document.getElementById('SeccionDonativos').scrollIntoView({
        behavior: 'smooth'
    });
}