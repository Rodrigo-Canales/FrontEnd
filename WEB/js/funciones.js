//Función para calcular peso ideal
function calcularPesoIdeal(){
    //Obtenemos la edad
    var edad = document.getElementById("txt_edad").value;
    //Calcular el peso ideal
    var pesoIdeal = edad * 2 +  8;
    //Mostrar el peso ideal
    document.getElementById("cnt_peso_ideal").innerHTML="El peso ideal es "+pesoIdeal+" kilos"
    //InvocamosEstadoPeso
    calcularEstadoPeso(pesoIdeal);
}

function calcularEstadoPeso(pesoIdeal){
    var pesoActual = document.getElementById("txt_peso_actual").value;
    //Comparamos pesoIdael y pesoActual
    var estado= "";
    var imagen= "";
    if(pesoActual == pesoIdeal){
        estado = "Peso ideal";
        imagen = "pesoideal128x128.png"
    }
    else{
        if(pesoActual > pesoIdeal){
            estado = "Sobrepeso"
            imagen = "sobrepeso128x128.png"
        }
        else{
            estado = "Bajo peso"
            imagen = "bajopeso128x128.png"
        }
    }
    document.getElementById("cnt_estado").innerHTML= "Estado: " + estado + "."
    document.getElementById("cnt_imagen").innerHTML= "<img src=img/" + imagen + ">"
}