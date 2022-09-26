import { insertar_piramide } from "./piramide.js";

export function estadistica(){
    function insertar_plato(){
        let plato = 
            '<div class="seccion_estadistica">' + 
                '<div class="seccion_plato">' + 
                    '<div class="circulo_1">' + 
                        
                    '</div>' +
                    '<div class="circulo_2">' + 
                        
                    '</div>' +
                    '<div class="circulo_3">' + 
                        
                    '</div>' +
                    '<div class="circulo_4">' + 
                        
                    '</div>' +
                    '<div class="circulo_5">' + 
                        
                    '</div>' +
                    '<div class="circulo_6">' + 
                        
                    '</div>' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Component%2010%20(3).png?raw=true">' +
                    '<h2 class="porcentaje_1">' + '25%' + '</h2>' +
                    '<h2 class="porcentaje_2">' + '50%' + '</h2>' +
                    '<h2 class="porcentaje_3">' + '25%' + '</h2>' +
                    '<p class="texto_plato">' + 'La principal característica del plato saludable es que define las porciones según cada grupo de alimentos y reconoce aquellos que, aunque están fuera de él, debes consumir a diario. Un plato saludable debe tener los siguientes grupos alimenticios esenciales: cereales integrales, proteínas, frutas y verduras. ' + '</p>' +
                '</div>' +
                '<div class="estadistica">' +
                    '<h2>' + 'Estadística' + '</h2>' +
                    '<p>' + 'Esta gráfica hace referencia al consumo de diferentes grupos de alimentos que deberías consumir distribuidos a lo largo del día.' + '</p>' +
                    '<p>' + 'Es una guía para que realices de forma variada y armónica una alimentación completa.' + '</p>' +
                    '<img src="https://github.com/NottStevE/Imagenes/blob/main/Proyecto%20aps/Grafico%20de%20pastel%20estadistica.png?raw=true" class="grafico_pastel">' +
                    '<div class="porcentajes_estadistica">' +
                        '<div class="caja_1_estadistica">' +
                            '<div class="circulo_naranja_estadistica">' +
                                
                            '</div>' +
                            '<p>' + '50% Verduras Hortalizas' + '</p>' +
                        '</div>' +
                        '<div class="caja_1_estadistica">' +
                            '<div class="circulo_verde_estadistica">' +
                                    
                            '</div>' +
                            '<p>' + '25% Proteínas' + '</p>' +
                        '</div>' +
                        '<div class="caja_1_estadistica">' +
                            '<div class="circulo_rojo_estadistica">' +
                                    
                            '</div>' +
                            '<p>' + ' 25% Hidratos de Carbono' + '</p>' +
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
        caja_2.innerHTML = plato + insertar_piramide;
    }
    boton_saltar.addEventListener('click', insertar_plato);
    boton_vamos.addEventListener('click', insertar_plato);
}