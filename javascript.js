var tam;
var mov;
var celdaAct;
var numPasos=0;
var pasosDados = [];

function validar ()
{
    var numero = document.getElementById('x').value;
    //alert ("numero "+numero);
    document.getElementById("y").value = document.getElementById("x").value;
    tam = numero;
    montarGrid(tam);
}

function validarS ()
{
    var numero = document.getElementById('step').value;
    
    mov = numero;
    //Se marca la celda 0,0 como inicial
    celdaAct="P00";
}

function montarGrid()
{
    var body = document.getElementsByTagName("body")[0];

    //Se crea la division en la que se monta la cuadricula
    var espacio = document.createElement("div");
    espacio.className= 'formulario';

    //Se crea la tabla
    var tabla = document.createElement("table");

    for(var i=0; i<tam; i++)
    {
        var fila = document.createElement("tr");
        for(var j=0; j<tam; j++)
        {
            if((i+j)%2)
            {
                var cuadro = document.createElement("td");
                cuadro.className = 'boxImpar';

                cuadro.setAttribute("id","I"+i+""+""+j+"");
                cuadro.setAttribute("name","impar");
                
                var texto = document.createTextNode("I "+i+""+j+"");
                cuadro.appendChild(texto);
                fila.appendChild(cuadro);
                
            }
            else
                {
                    var cuadro = document.createElement("td");
                    cuadro.className = 'boxPar';
                    
                    cuadro.setAttribute("id","P"+i+""+""+j+"");
                    cuadro.setAttribute("name","par");

                    var texto = document.createTextNode("P "+i+""+j+"");
                    cuadro.appendChild(texto);
                    fila.appendChild(cuadro);
                }
        }
        tabla.appendChild(fila);
    }
    espacio.appendChild(tabla);
    body.appendChild(espacio);

    //Se pone la celda inicial 0,0 en amarillo
    document.getElementById("P00").setAttribute("class","amarillo");  
}


document.onkeydown = function(e)
{
    switch (e.keyCode){
        case 37:
            izquierda();
            break;
        case 38:
            arriba();
            break;
        case 39:
            derecha();
            break;
        case 40:
            abajo();
            break;            
    }
}

function izquierda()
{
    
    var actual = celdaAct;
    var max = 0;
    var pos1 = actual.charAt(1);
    var pos2 = actual.charAt(2);
    var celdaNueva;
    var posmov = parseInt(parseInt(pos2)-parseInt(mov));
    var nuevaPos0;
    var nuevaPos2;

    //Si ya hemos realizado el numero maximo de pasos no mueve la casilla
    if(numPasos >= mov)
        alert ("Se ha superado el numero maximo de pasos");
    else
    {    
        if((posmov)<max)
            alert ("No es posible mover ese numero de cuadros");
        else
        {
            //ponemos la celda actual al color que le corresponda
            if(actual.charAt(0)=='P')
                document.getElementById(actual).setAttribute("class","boxPar");
            else
                document.getElementById(actual).setAttribute("class","boxImpar");

            //ponemos la celda nueva de amarillo
            //Es necesario saber si será par o impar para poner el caracter correspondiente del Id
            nuevaPos2 = posmov;
            if(parseInt(parseInt(pos1)+parseInt(nuevaPos2))%2)
                nuevaPos0 = "I";
            else
                nuevaPos0= "P";

            //se monta el id de la nueva celda
            celdaNueva = nuevaPos0;
            celdaNueva += pos1;
            celdaNueva += nuevaPos2;
            
            document.getElementById(celdaNueva).setAttribute("class","amarillo");
            
            //se actualiza que la celda actual sea la nueva
            celdaAct=celdaNueva;  
            numPasos++;  
            
            //Se añade la celda al array de celdas visitadas. 
            pasosDados.push(celdaNueva);
            //Si este movimiento hace que hayamos dado el mismo numero de saltos que el tamaño del salto mostramos los saltos dados
            if(numPasos >= mov)
                mostrarSaltos();
        }
    }
}
function derecha()
{
    var actual = celdaAct;
    var max = tam-1;
    var pos1 = actual.charAt(1);
    var pos2 = actual.charAt(2);
    var celdaNueva;
    var posmov = parseInt(parseInt(pos2)+parseInt(mov));
    var nuevaPos0;
    var nuevaPos2;

    //Si ya hemos realizado el numero maximo de pasos no mueve la casilla
    if(numPasos >= mov)
        alert ("Se ha superado el numero maximo de pasos");
    else
    { 
        if((posmov)>max)
            alert ("No es posible mover ese numero de cuadros");
        else
        {
            //ponemos la celda actual al color que le corresponda
            if(actual.charAt(0)=='P')
                document.getElementById(actual).setAttribute("class","boxPar");
            else
                document.getElementById(actual).setAttribute("class","boxImpar");

            //ponemos la celda nueva de amarillo
            //Es necesario saber si será par o impar para poner el caracter correspondiente del Id
            nuevaPos2 = posmov;
            if(parseInt(parseInt(pos1)+parseInt(nuevaPos2))%2)
                nuevaPos0 = "I";
            else
                nuevaPos0= "P";

            //se monta el id de la nueva celda
            celdaNueva = nuevaPos0;        
            celdaNueva += pos1;
            celdaNueva += nuevaPos2;
            
            document.getElementById(celdaNueva).setAttribute("class","amarillo");

            //se actualiza que la celda actual sea la nueva
            celdaAct=celdaNueva;
            numPasos++;

            //Se añade la celda al array de celdas visitadas. 
            pasosDados.push(celdaNueva);
            //Si este movimiento hace que hayamos dado el mismo numero de saltos que el tamaño del salto mostramos los saltos dados
            if(numPasos >= mov)
                mostrarSaltos();
        }
    }
}

function abajo()
{
    var actual = celdaAct;
    var max = tam-1;
    var pos1 = actual.charAt(1);
    var pos2 = actual.charAt(2);
    var celdaNueva;
    var posmov = parseInt(parseInt(pos1)+parseInt(mov));
    var nuevaPos0;
    var nuevaPos1;
    
    //Si ya hemos realizado el numero maximo de pasos no mueve la casilla
    if(numPasos >= mov)
        alert ("Se ha superado el numero maximo de pasos");
    else
    { 
        if((posmov)>max)
            alert ("No es posible mover ese numero de cuadros");
        else
        {
            //ponemos la celda actual al color que le corresponda
            if(actual.charAt(0)=='P')
                document.getElementById(actual).setAttribute("class","boxPar");
            else
                document.getElementById(actual).setAttribute("class","boxImpar");

            //ponemos la celda nueva de amarillo
            //Es necesario saber si será par o impar para poner el caracter correspondiente del Id
            nuevaPos1 = posmov;
            if(parseInt(parseInt(pos2)+parseInt(nuevaPos1))%2)
                nuevaPos0 = "I";
            else
                nuevaPos0= "P";

            //se monta el id de la nueva celda
            celdaNueva = nuevaPos0;
            celdaNueva += nuevaPos1;
            celdaNueva += pos2;
            
            document.getElementById(celdaNueva).setAttribute("class","amarillo");

            //se actualiza que la celda actual sea la nueva
            celdaAct=celdaNueva;
            numPasos++;
            //Se añade la celda al array de celdas visitadas. 
            pasosDados.push(celdaNueva);
            //Si este movimiento hace que hayamos dado el mismo numero de saltos que el tamaño del salto mostramos los saltos dados
            if(numPasos >= mov)
                mostrarSaltos();
        }
    }
}

function arriba()
{
    var actual = celdaAct;
    var max = 0;
    var pos1 = actual.charAt(1);
    var pos2 = actual.charAt(2);
    var celdaNueva;
    var posmov = parseInt(parseInt(pos1)-parseInt(mov));
    var nuevaPos0;
    var nuevaPos1;

    //Si ya hemos realizado el numero maximo de pasos no mueve la casilla
    if(numPasos >= mov)
        alert ("Se ha superado el numero maximo de pasos");
    else
    { 
        if((posmov)>max)
            alert ("No es posible mover ese numero de cuadros");
        else
        {
            //ponemos la celda actual al color que le corresponda
            if(actual.charAt(0)=='P')
                document.getElementById(actual).setAttribute("class","boxPar");
            else
                document.getElementById(actual).setAttribute("class","boxImpar");

            //ponemos la celda nueva de amarillo
            //Es necesario saber si será par o impar para poner el caracter correspondiente del Id
            nuevaPos1 = posmov;
            if(parseInt(parseInt(pos2)-parseInt(nuevaPos1))%2)
                nuevaPos0 = "I";
            else
                nuevaPos0= "P";

            //se monta el id de la nueva celda
            celdaNueva = nuevaPos0;
            celdaNueva += nuevaPos1;
            celdaNueva += pos2;
            
            document.getElementById(celdaNueva).setAttribute("class","amarillo");
            //se actualiza que la celda actual sea la nueva
            celdaAct=celdaNueva;   
            numPasos++;
            //Se añade la celda al array de celdas visitadas. 
            pasosDados.push(celdaNueva);
            //Si este movimiento hace que hayamos dado el mismo numero de saltos que el tamaño del salto mostramos los saltos dados
            if(numPasos >= mov)
                mostrarSaltos();
        }   
    }
}
function mostrarSaltos()
{
    var cadena = "";
    pasosDados.forEach(function(elemento)
        {
            if(cadena == '')
                cadena += '[';
            
            cadena += '('+elemento.charAt(1) + ','+elemento.charAt(2)+')'; 
        })
    cadena += ']';
    alert ("Se ha alcanzado el maximo de saltos, las casillas visitadas han sido: "+cadena);
}