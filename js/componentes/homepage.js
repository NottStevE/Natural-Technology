import { root } from "../main.js";
let inicio = [
    {
        comienzo: 
            '<div class="component">' + 
            
            '</div>' +
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo.png?raw=true" class="logo">' + 
            '<div class="texto">' + 
                '<p>' + 'Hola, es un gusto tenerte aquí en Health Wellness ¿quieres comenzar a conocer más sobre esto?' + '</p>' +
            '</div>',
        opciones: 
            '<div class="opciones">' + 
                '<div id="flecha_izquierda" class="flecha_izquierda">' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/flecha%20izquierda%200.2.png?raw=true">' +
                '</div>' +
                '<p class="boton_saltar" id="boton_saltar">' + 'SALTAR' + '</p>' +
                '<div class="botones">' + 
                    '<div class="boton_1" id="boton_1">' +
                        
                    '</div>' +
                    '<div class="boton_2" id="boton_2">' +
                        
                    '</div>' +
                    '<div class="boton_3" id="boton_3">' +
                        
                    '</div>' +
                    '<div class="boton_4" id="boton_4">' +
                        
                    '</div>' +
                '</div>' +
                '<div id="flecha_derecha">' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/flecha%20derecha%200.2.png?raw=true">' +
                '</div>' +
                '<p class="boton_vamos" id="boton_vamos">' + 'VAMOS!' + '</p>' +
            '</div>' 
    },
    {
        comienzo: 
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/imagen%201.png?raw=true" class="imagen_1">' + 
            '<div class="texto_2">' + 
                '<h2>' + '¿Qué es Health Wellness?' + '</h2>' +
                '<p>' + 'Esta página esta aquí para informarte y ayudarte acerca de los alimentos que consumes y como mejorar tu alimetación.' + '</p>' +
            '</div>'
    },
    {
        comienzo: 
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/imagen%202.png?raw=true" class="imagen_2">' + 
            '<div class="texto_2">' + 
                '<h2>' + 'Aprende Sobre...' + '</h2>' +
                '<p>' + 'Tendrás información por expertos acerca de proteínas, carbohidratos, lípidos y Vitaminas ¿Te parece?' + '</p>' +
            '</div>'
    },
    {
        comienzo: 
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/imagen%203.png?raw=true" class="imagen_3">' + 
            '<div class="texto_2">' + 
                '<h2>' + 'Mejora tu Alimentación' + '</h2>' +
                '<p>' + 'Estamos seguros que sera de beneficio para ti esta aplicación, aprende y disfruta lo que tenemos para ti!' + '</p>' +
            '</div>'
    }
];
export function home_page(){
    let seccion = '<div id="caja">' + '</div>';
    let seccion_2 = '<div id="caja_2">' + '</div>';

    root.innerHTML = seccion + seccion_2;

    let caja = document.querySelector("#caja");
    let caja_2 = document.querySelector("#caja_2");
    
    let posicion = 0;
    caja.innerHTML = inicio[posicion].comienzo;
    caja_2.innerHTML = inicio[posicion].opciones;
    
    let flecha_derecha = document.querySelector("#flecha_derecha");
    let flecha_izquierda = document.querySelector("#flecha_izquierda");
    let boton_saltar = document.querySelector("#boton_saltar");
    let boton_vamos = document.querySelector("#boton_vamos");
    let boton_1 = document.querySelector("#boton_1");
    let boton_2 = document.querySelector("#boton_2");
    let boton_3 = document.querySelector("#boton_3");
    let boton_4 = document.querySelector("#boton_4");
    
    boton_1.classList.add("cambiar_color");
    function moverSeccionesDerecha(){
        posicion++;
        caja.innerHTML = inicio[posicion].comienzo;
        if(posicion == 1){
            flecha_izquierda.classList.add("activar");
            boton_saltar.classList.add("desactivar");
            boton_1.classList.remove("cambiar_color");
            boton_2.classList.add("cambiar_color");
        }else if(posicion == 2){
            boton_3.classList.add("cambiar_color");
            boton_2.classList.remove("cambiar_color");
        }else if(posicion == 3){
            boton_4.classList.add("cambiar_color");
            boton_3.classList.remove("cambiar_color");
            flecha_derecha.classList.add("desactivar");
            boton_vamos.classList.remove("boton_vamos");
        }
    }
    function moverSeccionesIzquierda(){
        posicion--;
        caja.innerHTML = inicio[posicion].comienzo;
        if(posicion == 0){
            flecha_izquierda.classList.remove("activar");
            boton_saltar.classList.remove("desactivar");
            boton_1.classList.add("cambiar_color");
            boton_2.classList.remove("cambiar_color");
        }else if(posicion == 1){
            boton_2.classList.add("cambiar_color");
            boton_3.classList.remove("cambiar_color");
        }else if(posicion == 2){
            boton_3.classList.add("cambiar_color");
            boton_4.classList.remove("cambiar_color");
            flecha_derecha.classList.remove("desactivar");
            boton_vamos.classList.add("boton_vamos");
        }
    }
    flecha_derecha.addEventListener('click', moverSeccionesDerecha);
    flecha_izquierda.addEventListener('click', moverSeccionesIzquierda)
}