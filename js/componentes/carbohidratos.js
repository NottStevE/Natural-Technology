export let menu = 
    '<div class="contenedor" id="contenedor">' +
        '<div class="fondo">' + 
            '<div id="menu" class="menu">' + 
            '<div class="menu_compu">' + 
                '<a href="./proteina.html">' + 'Proteínas' + '</a>' +
                '<a href="./carbohidratos.html">' + 'Carbohidratos' + '</a>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20compu.png?raw=true">' +
                '<a>' + 'Lípidos' + '</a>' +
                '<a>' + 'Vitaminas' + '</a>' +
            '</div>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/icono%20menu.png?raw=true" id="boton_menu_desplegable">' + 
                '<div class="fondo_menu desactivar" id="menu_desplegable">' + 
                    '<div class="menu_desplegable">' + 
                        '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20desplegable.png?raw=true">' +
                        '<div id="boton_bienvenida">' + 
                            '<a href="./index.html">' + 'Bienvenida' + '</a>' +
                        '</div>' +
                        '<div id="boton_home" class="menu_decoracion">' + 
                            '<p>' + 'Home' + '</p>' +
                        '</div>' +
                        '<div id="boton_proteinas">' + 
                            '<a href="./proteina.html">' + 'Proteínas' + '</a>' +
                        '</div>' +
                        '<div id="boton_carbohidratos">' + 
                            '<a href="./carbohidratos.html">' + 'Carbohidratos' + '</a>' +
                        '</div>' +
                        '<div id="boton_lipidos">' + 
                            '<a>' + 'Lípidos' + '</a>' +
                        '</div>' +
                        '<div id="boton_vitaminas">' + 
                            '<a>' + 'Vitaminas' + '</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu.png?raw=true" class="logo_menu">' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/titulo%20carbohidratos%20compu.png?raw=true" class="titulo_proteinas">'
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
                    '<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' + '</iframe>' +
                    '<div>' +
                        '<p>' + 'Funciones de los Carbohidratos en el Organismo' + '</p>' +
                        '<h2>' + '3min' + '</h2>' +
                    '</div>' +
                '</div>' +
                '</div>' +
                '<div class="caja_texto_proteina">' + 
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/decoracion%20texto.png?raw=true" class="decoracion_texto_1">' +
                    '<p>' + 'Con la visualización del video ya tienes más conocimientos acerca de los carbohidratos, que te parece si conocemos las propiedades de algunos de ellos!!' + '</p>' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/decoracion%20texto%202.png?raw=true" class="decoracion_texto_2">' +
                '</div>' +
            '</div>' +
            '<div class="seccion_2">' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/naranja%20carbohidratos.png?raw=true" class="imagen">' +
                '<div class="titulos_proteina">' + 
                    '<h2 class="titulo_01">' + 'Conoce' + '</h2>' +
                    '<h2 class="titulo_02">' + 'Alimentos' +' </h2>' +
                    '<h2 class="titulo_03">' + 'Ricos en' + '</h2>' +
                    '<h2 class="titulo_04">' + 'Carbohidratos' + '</h2>' +
                '</div>' +
                '<div class="alimentos_proteinas">' + 
                    '<div class="caja_salmon">' + 
                        '<p>' + 'Pera' + '</p>' +
                        '<img src="">' +
                    '</div>' +
                    '<div class="caja_soja">' + 
                        '<p>' + 'Piña' + '</p>' +
                        '<img src="">' +
                    '</div>' +
                    '<div class="caja_jamon">' + 
                        '<p>' + 'Garbanzo' + '</p>' +
                        '<img src="">' +
                    '</div>' +
                    '<div class="caja_lomo">' + 
                        '<p>' + 'Fresas' + '</p>' +
                        '<img src="">' +
                    '</div>' +
                    '<div class="caja_filete">' + 
                        '<p>' + 'Uva' + '</p>' +
                        '<img src="">' +
                    '</div>' +
                    '<div class="caja_pierna">' + 
                        '<p>' + 'Kiwi' + '</p>' +
                        '<img src="">' +
                    '</div>' +
                '</div>' +
                '<div>' + 
                    '<img src="" class="decoa">'
                '</div>' +
            '</div>' +
        '</div>';
    let caja_proteina = document.querySelector("#caja_carbohidratos");

    caja_proteina.innerHTML = menu + contenedor_proteina;
    let desplegable = document.querySelector("#menu_desplegable");
    let boton_desplegable = document.querySelector("#boton_menu_desplegable");
    function menu_desplegable(){
        desplegable.classList.remove("desactivar");
    }
    boton_desplegable.addEventListener('click', menu_desplegable);
}
pagina_proteina();