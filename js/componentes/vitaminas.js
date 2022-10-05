import { insertar_footer } from "./footer.js";
import { vitaminas_DATA } from "./DATA/vitaminas_DATA.js";

export let menu = 
    '<div class="contenedor" id="contenedor">' +
        '<div class="fondo">' + 
            '<div id="menu" class="menu">' + 
            '<div class="menu_compu">' + 
                '<a href="./proteina.html">' + 'Proteínas' + '</a>' +
                '<a href="./carbohidratos.html">' + 'Carbohidratos' + '</a>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20compu.png?raw=true">' +
                '<a href="./lipidos.html">' + 'Lípidos' + '</a>' +
                '<a href="./vitaminas.html">' + 'Vitaminas' + '</a>' +
            '</div>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/icono%20menu.png?raw=true" id="boton_menu_desplegable">' + 
                '<div class="fondo_menu desactivar" id="menu_desplegable">' + 
                    '<div class="menu_desplegable">' + 
                        '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20desplegable.png?raw=true">' +
                        '<div id="boton_bienvenida">' + 
                            '<a href="./index.html">' + 'Bienvenida' + '</a>' +
                        '</div>' +
                        '<div id="boton_home" class="menu_decoracion">' + 
                            '<a href="./index.html">' + 'Home' + '</a>' +
                        '</div>' +
                        '<div id="boton_proteinas">' + 
                            '<a href="./proteina.html">' + 'Proteínas' + '</a>' +
                        '</div>' +
                        '<div id="boton_carbohidratos">' + 
                            '<a href="./carbohidratos.html">' + 'Carbohidratos' + '</a>' +
                        '</div>' +
                        '<div id="boton_lipidos">' + 
                            '<a href="./lipidos.html">' + 'Lípidos' + '</a>' +
                        '</div>' +
                        '<div id="boton_vitaminas">' + 
                            '<a href="./vitaminas.html">' + 'Vitaminas' + '</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu.png?raw=true" class="logo_menu">' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/titulo%20vitaminas.png?raw=true" class="titulo_proteinas">' +
        '</div>' +
    '</div>'
;
export function pagina_lipidos(){
    let contenedor_proteina = 
        '<div class="contenedor_proteina">'+
            '<div class="seccion_1">' +
                '<div class="contenedor_video">' + 
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/personaje%20naranja.png?raw=true" class="personaje_naranja">' + 
                '<div class="caja_video">' + 
                    '<iframe width="560" height="315" src="https://www.youtube.com/embed/5CvWTEpEXY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                    '<div>' +
                        '<p>' + 'Funciones de las Vitaminas en el Organismo' + '</p>' +
                        '<h2>' + '2min' + '</h2>' +
                    '</div>' +
                '</div>' +
                '</div>' +
                '<div class="caja_texto_proteina">' + 
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/decoracion%20texto.png?raw=true" class="decoracion_texto_1">' +
                    '<p>' + 'Con la visualización del video ya tienes más conocimientos acerca de las vitaminas, que te parece si conocemos las propiedades de algunos de ellos!!' + '</p>' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/decoracion%20texto%202.png?raw=true" class="decoracion_texto_2">' +
                '</div>' +
            '</div>' +
            '<div class="seccion_2">' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/personaje%20carbohidratos%20vitaminas.png?raw=true" class="imagen">' +
                '<div class="titulos_proteina">' + 
                    '<h2 class="titulo_01">' + 'Conoce' + '</h2>' +
                    '<h2 class="titulo_02">' + 'Alimentos' +' </h2>' +
                    '<h2 class="titulo_03">' + 'Ricos en' + '</h2>' +
                    '<h2 class="titulo_04">' + 'Vitaminas' + '</h2>' +
                '</div>' +
                '<div id="contenedor_alimentos">' + 
                
                '</div>' +
                '<div>' + 
                    '<img src="" class="titulo_propiedades">'
                '</div>' +
            '</div>' +
        '</div>'
        ;
    let caja_vitaminas = document.querySelector("#caja_vitaminas");
    caja_vitaminas.innerHTML = menu + contenedor_proteina + insertar_footer;

    let desplegable = document.querySelector("#menu_desplegable");
    let boton_desplegable = document.querySelector("#boton_menu_desplegable");
    function menu_desplegable(){
        desplegable.classList.remove("desactivar");
    }
    boton_desplegable.addEventListener('click', menu_desplegable);

    let alimentos_vitaminas = ['Huevos', 'Leche', 'Melón', 'Yogurt', 'Hígado', 'Espinaca', 'Zanahoria', 'Guisantes', 'Remolacha', 'Almendras'];
    let contenedor_alimentos = document.querySelector("#contenedor_alimentos");

    function agregar_alimentos(){
        alimentos_vitaminas.forEach(function(element, index){
            let contenedor = document.createElement("div");
            contenedor.innerHTML = 
                '<p>' + element + '</p>' +
                '<img src="' + vitaminas_DATA[index].alimentos_imagenes + '">'
            ;
            contenedor_alimentos.appendChild(contenedor);
        });
    }
    agregar_alimentos();
}
pagina_lipidos();