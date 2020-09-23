function menu()
{

    cantidad=prompt("Ingrese:  \n1. Suma Numeros Array \n2. Numero En La Mitad del Array\n3. Ejercicio Arreglo Academlo\n4. sum of all the multiples of 3 or 5 below 1000 ");
    
    if (cantidad==1)
       {
           uno();
       }
    if (cantidad==2)
       {
           dos();
       }
    if (cantidad==3)
       {
           tres();
       }
    if (cantidad==4)
     {
         cuatro();
     }
    
}
menu();


function uno()
{
//Ejercicio #18
//● Crea un programa que lea un array de números de N longitud y nos de la suma de
//todos esos números.
var cantidad;
let suma = 0;
var arr = new Array(cantidad);
cantidad=prompt('Ingrese cantidad de numeros a leer:','');

for(var i=0;i<cantidad;i++)
    {
      arr[i]=prompt('Ingrese Numero a leer:  '+ (i+1) ,'');
      suma = suma += parseInt(arr[i]);
      

    }

    alert(" La sumatoria De Los Valores Del Array Es:   "+suma);
    menu();
}
function dos()
{
//● Crea un programa que lea un array de números de N longitud y encuentre el número
//que se encuentra en la mitad.
//○ En caso de que el número de la mitad sea uno solo el programa debe
//devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//○ En caso de que hayan 2 números en medio devolveremos un array de
//números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]


var cantidad;
var largo,lar =0;
var arr = new Array(cantidad);
cantidad=prompt('Ingrese cantidad de numeros a leer:','');

for(var i=0;i<cantidad;i++)
    {
      arr[i]=prompt('Ingrese Numero a leer:  '+ (i+1) ,'');
    }

largo=arr.length/2;
lar=largo-1;
 if (arr.length %2 ==0)
    {
        alert(" El Arreglo es:  "+ arr+   "\n Los Elementos De la Mitad Son   "+ arr[lar] +" y "+ arr[largo])
        
        
    }   
 if (arr.length %2 !=0)
    {   lar=arr.length/2;
        largo= Math.trunc(lar); 
        alert(" El Elemento De la Mitad es    "+ arr[largo] );   
    }   

    menu();
}
function tres()
{
// Calcula el promedio de las edades del arreglo de usuarios

//● Encuentra a la persona más joven
//● Encuentra a la persona de mayor edad
var suma=0;
var mayor=0;
var menor=100;
var nombm, nombmen;
const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ]
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ]
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
    }

]

for (var i=0; i < users.length ; i++)
{
 suma=suma+users[i].age;
 if (users[i].age > mayor )
    {
     mayor=users[i].age;
     nombm=users[i].name;
    }
 if (users[i].age < menor )
    {
     menor=users[i].age;
     nombmen=users[i].name;
    }



}
alert("La Edad Promedio Es  "+(suma/users.length) +"\nEl Menor es   "+nombmen +"\nEl Mayor es  "+nombm  );
menu();
}

function cuatro(){

//Ejercicio #20
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


var suma=0;


for(var i=1; i <1000; i++)
{
  if (i% 3 == 0){suma=suma+i;}
  if (i% 5 == 0){suma=suma+i;}

}

alert(" La Sumatoria De Los Multiplos de 3 y 5 de 1 a 1000  es "+ suma );
menu();
}
