export let menu = 
    '<div class="contenedor desactivar" id="contenedor">' +
        '<div class="fondo">' + 
            '<div id="menu" class="menu">' + 
            '<div class="menu_compu">' + 
                '<p>' + 'Proteínas' + '</p>' +
                '<p>' + 'Carbohidratos' + '</p>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20compu.png?raw=true">' +
                '<p>' + 'Lípidos' + '</p>' +
                '<p>' + 'Vitaminas' + '</p>' +
            '</div>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/icono%20menu.png?raw=true" id="boton_menu_desplegable">' + 
                '<div class="fondo_menu desactivar" id="menu_desplegable">' + 
                    '<div class="menu_desplegable">' + 
                        '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20desplegable.png?raw=true">' +
                        '<div id="boton_bienvenida">' + 
                            '<p>' + 'Bienvenida' + '</p>' +
                        '</div>' +
                        '<div id="boton_home" class="menu_decoracion">' + 
                            '<p>' + 'Home' + '</p>' +
                        '</div>' +
                        '<div id="boton_proteinas">' + 
                            '<p>' + 'Proteínas' + '</p>' +
                        '</div>' +
                        '<div id="boton_carbohidratos">' + 
                            '<p>' + 'Carbohidratos' + '</p>' +
                        '</div>' +
                        '<div id="boton_lipidos">' + 
                            '<p>' + 'Lípidos' + '</p>' +
                        '</div>' +
                        '<div id="boton_vitaminas">' + 
                            '<p>' + 'Vitaminas' + '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu.png?raw=true" class="logo_menu">' +
            '<div class="titulos">' +
                '<h2 class="titulo_1">' + 'MIDE TUS' + '</h2>' +
                '<h2 class="titulo_2">' + 'PORCIONES' + '</h2>' +
                '<h2 class="titulo_3">' + 'Y CREA UN' + '</h2>' +
                '<h2 class="titulo_4">' + 'PLATO ¡SALUDABLE!' + '</h2>' +
            '</div>' +
        '</div>' +
    '</div>'
;
export function insertar_menu(){
    function saltar(){
        let contenedor_menu = document.querySelector("#contenedor");
        let contenedor_comienzo = document.querySelector("#contenedor_comienzo");
        let contenedor_opciones = document.querySelector("#contenedor_opciones");
        let contenedor_comienzo_2 = document.querySelector("#contenedor_comienzo2");

        contenedor_menu.classList.remove("desactivar");
        contenedor_comienzo.classList.add("desactivar");
        contenedor_opciones.classList.add("desactivar");
        contenedor_comienzo_2.classList.add("desactivar");
    }
    boton_saltar.addEventListener('click', saltar);
    boton_vamos.addEventListener('click', saltar);
    
    let desplegable = document.querySelector("#menu_desplegable");
    let boton_desplegable = document.querySelector("#boton_menu_desplegable");
    function menu_desplegable(){
        desplegable.classList.remove("desactivar");
    }
    boton_desplegable.addEventListener('click', menu_desplegable);
}