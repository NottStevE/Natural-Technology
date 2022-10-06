import { carbohidratos_DATA } from "./DATA/carbohidratos_DATA.js";

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
                        '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/salida%201.png?raw=true" id="close">' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu.png?raw=true" class="logo_menu">' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/titulo%20carbohidratos%20compu.png?raw=true" class="titulo_proteinas">' +
        '</div>' +
    '</div>'
;
export function pagina_proteina(){
    let contenedor_proteina = 
        '<div class="contenedor_proteina">'+
            '<div class="seccion_1">' +
                '<div class="contenedor_video">' + 
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/personaje%20naranja.png?raw=true" class="personaje_naranja">' + 
                    '<div class="caja_video">' + 
                        '<iframe width="560" height="315" src="https://www.youtube.com/embed/qNZjSijtWWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' + '</iframe>' +
                        '<div>' +
                            '<p>' + 'Funciones de las Proteínas en el Organismo' + '</p>' +
                            '<h2>' + '2min' + '</h2>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="caja_texto_proteina">' + 
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/personaje%20naranja.png?raw=true" class="personaje_naranja_2">' + 
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/decoracion%20texto.png?raw=true" class="decoracion_texto_1">' +
                    '<p>' + 'Con la visualización del video ya tienes más conocimientos acerca de las proteínas, que te parece si conocemos las propiedades de algunos de ellos!!' + '</p>' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/decoracion%20texto%202.png?raw=true" class="decoracion_texto_2">' +
                '</div>' +
            '</div>' +
            '<div class="seccion_2">' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/personaje%20carbohidratos%20vitaminas.png?raw=true" class="imagen">' +
                '<div class="titulos_proteina">' + 
                    '<h2 class="titulo_01">' + 'Conoce' + '</h2>' +
                    '<h2 class="titulo_02">' + 'Alimentos' +' </h2>' +
                    '<h2 class="titulo_03">' + 'Ricos En' + '</h2>' +
                    '<h2 class="titulo_04">' + 'Carbohidratos' + '</h2>' +
                '</div>' +
                '<div id="contenedor_alimentos">' + 
                
                '</div>' +
            '</div>' +
            '<div class="seccion_3">' + 
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Component%20118.png?raw=true" class="titulo_propiedades">' +
                '<div id="info_alimentos_contenedor">' + 
                
                '</div>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Component%20119.png?raw=true" class="titulo_recordatorio">' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Component%20130.png?raw=true" class="recordatorio_movil">' + 
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Component%20121.png?raw=true" class="recordatorio_compu">' +
                '<footer>' + 
        '<div class="seccion_1_footer">' + 
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20footer.png?raw=true">' +
            '<div>' + 
                '<h2>' + 
                    'Biólogas' +
                '</h2>' +
                '<p>' + 
                    '-Madelyne Toc' +
                '</p>' +
                '<p>' + 
                    '-Estefany Jimenez' +
                '</p>' +
                '<p>' + 
                    '-Karen Dávila' +
                '</p>' +
                '<h2 class="espacio">' + 
                    'Diseñadoras' +
                '</h2>' +
                '<p>' + 
                    '-Karen Boror' +
                '</p>' +
                '<p>' + 
                    '-Kristell García' +
                '</p>' +
            '</div>' +
            '<div>' + 
                '<h2>' + 
                    'Programadores' +
                '</h2>' +
                '<p>' + 
                    '-Brandon Gómez' +
                '</p>' +
                '<p>' + 
                    '-Marlon Martínez' +
                '</p>' +
                '<p>' + 
                    '-Alan Monasterio' +
                '</p>' +

                '<h2 class="espacio">' + 
                    'Referencias' +
                '</h2>' +
                '<p>' + 
                    '-TablaCAlimentos.pdf' +
                '</p>' +
                '<p>' + 
                    '-Merline Plus.com' +
                '</p>' +
                '<p>' + 
                    '-Aprende.com' +
                '</p>' +
            '</div>' +
        '</div>' +
        '<div class="seccion_2_footer">' + 
            '<p>' + 'Santa Catalina Laboure ApS 2022' + '</p>' +
        '</div>' +
    '</footer>'
            '</div>' +
        '</div>'
        ;
    let caja_proteina = document.querySelector("#caja_proteina");

    caja_proteina.innerHTML = menu + contenedor_proteina;
    //ABRIR MENU
    let desplegable = document.querySelector("#menu_desplegable");
    let boton_desplegable = document.querySelector("#boton_menu_desplegable");
    function menu_desplegable(){
        desplegable.classList.remove("desactivar");
    }
    boton_desplegable.addEventListener('click', menu_desplegable);
    //CERRAR MENU
    let close = document.querySelector("#close");
    function menu_close(){
        desplegable.classList.add("desactivar");
    }
    close.addEventListener('click', menu_close);

    let alimentos_proteinas = ['Pera', 'Piña', 'Garbanzo', 'Fresa', 'Uva', 'Kiwi', 'Limón', 'Mango', 'Naranja', 'Banana'];
    let contenedor_alimentos = document.querySelector("#contenedor_alimentos");


    function agregar_alimentos(){
        alimentos_proteinas.forEach(function(element, index){
            let contenedor = document.createElement("div");
            contenedor.innerHTML = 
                '<p>' + element + '</p>' +
                '<img src="' + carbohidratos_DATA[index].alimentos_imagenes + '">'
            ;
            contenedor_alimentos.appendChild(contenedor);
        });
    }
    agregar_alimentos();

    let info_alimentos = document.querySelector("#info_alimentos_contenedor");
    function agregar_info_alimentos(){
        alimentos_proteinas.forEach(function(element, index){
            let contenedor = document.createElement("div");
            contenedor.innerHTML = 
                '<h2 class="nombre_fruta_info">' + carbohidratos_DATA[index].nombre + '</h2>' +
                '<div class="info_cal">' + 
                    '<p class="kcal">' + carbohidratos_DATA[index].kcla + '%Kcal' + '</p>' +
                    '<p class="cal">' + carbohidratos_DATA[index].cal + '%cal' + '</p>' +
                '</div>' +
                '<div class="contenido_fruta">' + 
                    '<img class="imagen_fruta_info" src="'+ carbohidratos_DATA[index].alimentos_imagenes + '">' +
                    '<img class="imagen_estadistica_info" src="'+ carbohidratos_DATA[index].estadistica + '">' +
                    '<img class="porcentaje_info" src="'+ carbohidratos_DATA[index].porcentaje + '">' +
                '</div>'
            ;
            contenedor.classList.add("contenedor_info");
            info_alimentos.appendChild(contenedor);
        });
    }
    agregar_info_alimentos();
}
pagina_proteina();