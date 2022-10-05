import { estadistica } from "./estadistica.js";
import { buscador_DATA } from "./DATA/buscador_DATA.js";

export let menu = 
    '<div class="contenedor desactivar" id="contenedor">' +
        '<div class="fondo">' + 
            '<div id="menu" class="menu">' + 
            '<div class="menu_compu">' + 
                '<a href="./proteina.html">' + 'Proteínas' + '</a>' +
                '<a href="./carbohidratos.html">' + 'Carbohidratos' + '</a>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20compu.png?raw=true">' +
                '<a href="./lipidos.html">' + 'Lípidos' + '</a>' +
                '<a href="./vitaminas.html">' + 'Vitaminas' + '</a>' +
            '</div>' +
                '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/icono%20menu.png?raw=true" id="boton_menu_desplegable" href="index.html">' + 
                '<div class="fondo_menu desactivar" id="menu_desplegable">' + 
                    '<div class="menu_desplegable">' + 
                        '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/logo%20menu%20desplegable.png?raw=true">' +
                        '<div id="boton_bienvenida">' + 
                            '<a href="./index.html">' + 'Bienvenida' + '</a>' +
                        '</div>' +
                        '<div id="boton_home" class="menu_decoracion">' + 
                            '<p href="./index.html">' + 'Home' + '</p>' +
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
            '<div class="caja_buscador">' + 
                '<input type="text" id="buscador" placeholder="Busca tu alimento favorito 🔍︎">' +
                '<div class="separacion">' + 
                    '<div id="caja_resultados">' + 
                    
                    '</div>' +
                    '<div id="resultado_busqueda">' + 
                        '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/CLOSE.png?raw=true" id="cerrar_resultados">' +
                        '<div id="despliegue_informacion">' + 
                            
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
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
        
        estadistica();
    }
    boton_saltar.addEventListener('click', saltar);
    boton_vamos.addEventListener('click', saltar);
    
    let desplegable = document.querySelector("#menu_desplegable");
    let boton_desplegable = document.querySelector("#boton_menu_desplegable");
    function menu_desplegable(){
        desplegable.classList.remove("desactivar");
    }
    boton_desplegable.addEventListener('click', menu_desplegable);

    //BUSCADOR

    let alimentos_buscador = ['Aceitunas', 'Aguacate', 'Almendras', 'Atún', 'Aceite de Coco', 'Aceite de Oliva', 'Banana', 'Chorizo', 'Costilla de Cerdo', 'Cangrejo', 'Espinaca', 'Fresa', 'Garbanzo', 'Guisantes', 'Huevo', 'Huevo', 'Hígado', 'Jamón de Pavo', 'Kiwi', 'Leche', 'Limón', 'Linaza', 'Lomo de cerdo', 'Mango', 'Melón', 'Mantequilla de Maní', 'Naranja', 'Pera', 'Piña', 'Pierna de Cerdo', 'Remolacha', 'Salchicha', 'Salmón', 'Soja', 'Ternera Filete', 'Uva', 'Yogurt', 'Zanahoria']
    let caja_resultados = document.querySelector("#caja_resultados");
    let resultado_busqueda = document.querySelector("#resultado_busqueda");
    let despliegue_informacion = document.querySelector("#despliegue_informacion");

    function agregar_resultados(){
        alimentos_buscador.forEach(function(element, index){
            let caja_alimento = document.createElement("div");
            caja_alimento.classList.add("alimento");
            caja_alimento.innerHTML = 
                '<div class="icono">' + 
                    '<img src="'+ buscador_DATA[index].imagen +'">' +
                '</div>' +
                '<p class="nombre_fruta">' + element + '</p>' +
                '<p class="tipo">' + buscador_DATA[index].tipo + '</p>'
            ;
            caja_resultados.appendChild(caja_alimento);
            caja_alimento.classList.add("filtro");

            function agregar_info_producto(){
                despliegue_informacion.innerHTML = 
                    '<h2 class="titulo_fruta">' + element.toLocaleUpperCase() + '</h2>' +
                    '<div class="info_calorias">' + 
                        '<p class="info_1">' + buscador_DATA[index].kcal + '%Kcal' + '</p>' +
                        '<p class="info_2">' + buscador_DATA[index].cal + '%cal' + '</p>' +
                    '</div>' +
                    '<div class="contenido_fruta">' + 
                        '<img class="imagen_fruta" src="'+ buscador_DATA[index].imagen_resultado + '">' +
                        '<img class="imagen_fruta" src="'+ buscador_DATA[index].estadistica + '">' +
                        '<div class="porcentajes">' + 
                            '<p class="tipo_alimento">' + buscador_DATA[index].tipo + '</p>' +
                            '<img class="porcentaje" src="'+ buscador_DATA[index].porcentaje + '">' +
                        '</div>' +
                        '<div class="vitaminas_contenidas">' + 
                            '<img class="personaje" src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/personaje%20naranja.png?raw=true">' +
                            '<p>' + 'Vitaminas Contenidas' + '</p>' +
                            '<img class="flecha" src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/flecha.png?raw=true">' +
                        '</div>' +
                    '</div>'
                    ;
                resultado_busqueda.classList.remove("filtro")
            }
            caja_alimento.addEventListener('click', agregar_info_producto);
        });
        caja_resultados.classList.add("filtro");
        resultado_busqueda.classList.add("filtro")
    }
    agregar_resultados();
    document.addEventListener("keyup", e=>{
        if(e.target.matches("#buscador")){
            document.querySelectorAll(".alimento").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?articulo.classList.remove("filtro")
                :articulo.classList.add("filtro")
            })
        }
        if(e.target.value == ""){
            document.querySelectorAll(".alimento").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?articulo.classList.add("filtro")
                :articulo.classList.add("filtro")
            })
        }
        if(e.target.matches("#buscador")){
            document.querySelectorAll(".alimento").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?caja_resultados.classList.remove("filtro")
                :caja_resultados.classList.remove("filtro")
            })
        }
        if(e.target.value == ""){
            document.querySelectorAll(".alimento").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?caja_resultados.classList.add("filtro")
                :caja_resultados.classList.add("filtro")
            })
        }
    });
    let cerrar_resultados = document.querySelector("#cerrar_resultados");
    cerrar_resultados.addEventListener('click', () => {
        resultado_busqueda.classList.add("filtro");
    })
}