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
alert("La Edad Promedio Es  "+(suma/users.length) );
alert("El Menor es   "+nombmen);
alert("El Mayor es  "+nombm );

