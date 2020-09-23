//● Crea un programa que lea un array de números de N longitud y encuentre el número
//que se encuentra en la mitad.
//○ En caso de que el número de la mitad sea uno solo el programa debe
//devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//○ En caso de que hayan 2 números en medio devolveremos un array de
//números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]


var cantidad;
var largo,lar =0;
var arr = new Array(cantidad);

//obtener el arreglo
cantidad=prompt('Ingrese cantidad de numeros a leer:','');
// ciclo lectura del array
for(var i=0;i<cantidad;i++)
    {
      arr[i]=prompt('Ingrese Numero a leer:  '+ (i+1) ,'');
    }
// obtengo el tamaño del array y divido en 2

largo=arr.length/2;
//obtener el valor del hermano a la izquierda en el array por el tema de que inician en 0
lar=largo-1;

//obtengo el residuo y presento resultados
if (arr.length %2 ==0)
    {
        alert(" El Arreglo es:  "+ arr+   " Los Elementos De la Mitad Son   "+ arr[lar] +" y "+ arr[largo])
        
        
    }   
// si el residuo es diferente de cero pus presento el elemento de la mitad 
 if (arr.length %2 !=0)
    {   lar=arr.length/2;
        largo= Math.trunc(lar); 
        alert(" El Elemento De la Mitad es   "+ arr[largo] );   
    }   

 