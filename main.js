
    const imagen = document.getElementById('imagen');


console.log("asgoas")

imagen.addEventListener('load', function() {
    console.log('La imagen se cargó correctamente.');
    document.body.style.display = 'block';
    imagen.style.display = 'block';
});