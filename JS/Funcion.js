
let boton = document.getElementById('boton');

let biogas = document.getElementById('biogas');

let Datos = document.getElementById('Datos');

boton.addEventListener('click', toggleText);

function toggleText () {
    biogas.classList.toggle('show');
    Datos.classList.toggle('hide');


    if (biogas.classList.contains('show')) {
        
    boton.innerHTML = 'Ocultar Video';} 
    
    else {
        boton.innerHTML = 'Video de Experiencia Laboral';        
    }

}
