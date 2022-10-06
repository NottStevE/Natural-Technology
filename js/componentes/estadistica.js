import { insertar_piramide } from "./piramide.js";
import { insertar_footer } from "./footer.js";

export function estadistica(){
    function insertar_plato(){
        let plato = 
            '<div class="seccion_estadistica">' + 
            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/plato%20compu.png?raw=true" class="plato_img">' +
            '<p class="texto_plato">' + 'La principal característica del plato saludable es que define las porciones según cada grupo de alimentos y reconoce aquellos que, aunque están fuera de él, debes consumir a diario. Un plato saludable debe tener los siguientes grupos alimenticios esenciales: cereales integrales, proteínas, frutas y verduras.' + '</p>' +
                '<div class="estadistica">' +
                    '<h2>' + 'Estadística' + '</h2>' +
                    '<p class="texto_estadistica_1">' + 'Esta gráfica hace referencia al consumo de diferentes grupos de alimentos que deberías consumir distribuidos a lo largo del día.' + '</p>' +
                    '<p class="texto_estadistica_2">' + 'Es una guía para que realices de forma variada y armónica una alimentación completa.' + '</p>' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Grafico%20de%20pastel%20estadistica.png?raw=true" class="grafico_pastel">' +
                    '<div class="porcentajes_estadistica">' +
                        '<div class="caja_1_estadistica">' +
                            '<div class="circulo_naranja_estadistica">' +
                                
                            '</div>' +
                            '<p class="porcentaje_1_estadistica">' + '50% Verduras Hortalizas' + '</p>' +
                        '</div>' +
                        '<div class="caja_1_estadistica">' +
                            '<div class="circulo_verde_estadistica">' +
                                    
                            '</div>' +
                            '<p class="porcentaje_2_estadistica">' + '25% Proteínas' + '</p>' +
                        '</div>' +
                        '<div class="caja_1_estadistica">' +
                            '<div class="circulo_rojo_estadistica">' +
                                    
                            '</div>' +
                            '<p class="porcentaje_3_estadistica">' + ' 25% Hidratos de Carbono' + '</p>' +
                        '</div>' +
                    '</div>' +
                    '<div class="seccion_objetos_estadistica">' + 
                        '<div>' + 
                            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Rectangle%2089.png?raw=true">' +
                            '<p>' + 'Frutas' + '</p>' +
                        '</div>' +
                        '<div>' + 
                            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Rectangle%2090.png?raw=true">' +
                            '<p>' + 'Carnes' + '</p>' +
                        '</div>' +
                        '<div>' + 
                            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Rectangle%2091.png?raw=true">' +
                            '<p>' + 'Lácteos' + '</p>' +
                        '</div>' +
                        '<div>' + 
                            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/pastas.png?raw=true">' +
                            '<p>' + 'Pastas' + '</p>' +
                        '</div>' +
                        '<div>' + 
                            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/legunbres.png?raw=true">' +
                            '<p>' + 'Legumbres' + '</p>' +
                        '</div>' +
                        '<div>' + 
                            '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/cereales.png?raw=true">' +
                            '<p>' + 'Cereales' + '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        ;
        caja_2.innerHTML = plato + insertar_piramide + insertar_footer;
    }
    boton_saltar.addEventListener('click', insertar_plato);
    boton_vamos.addEventListener('click', insertar_plato);
}