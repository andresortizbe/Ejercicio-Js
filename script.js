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
      
   
    
//● Crea un programa que lea un array de números de N longitud y encuentre el número
//que se encuentra en la mitad.
//○ En caso de que el número de la mitad sea uno solo el programa debe
//devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//○ En caso de que hayan 2 números en medio devolveremos un array de
//números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
//Los programas