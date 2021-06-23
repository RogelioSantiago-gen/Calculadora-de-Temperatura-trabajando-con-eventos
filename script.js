let button = document.querySelector('#calcular');
button.addEventListener('click', () => {
  let variable = document.querySelector('#temperatura').value;
  
  //Covertir a farehent
  let fahre = parseInt(variable) * 1.8 + 32;
  //Convertir a Kelvin
  let kelvin = parseInt(variable) + 273.15;

  console.log(fahre);
  console.log(kelvin);

  let mostrar1 = document.querySelector('#kelvin');
  let mostrar2 = document.querySelector('#fahre');

  mostrar1.textContent = kelvin;
  mostrar2.textContent = fahre;
});
