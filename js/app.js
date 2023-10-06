let caja = document.getElementById('caja');

//caja.style.width = '200px';
//caja.style.height = '200px';

function saludar() {
    alert("Hola desde Javascript y Eventos");
}

caja.addEventListener('mouseover', function () {
    //saludar();
})

caja.addEventListener('click', () => {
    let nombre = prompt("Ingresa tu nombre:")
    let respuesta = confirm(`${nombre}, Deseas seguir aprendiendo?`);
    if (respuesta) {
        alert(`Entonces ${nombre}, Debes seguir practicando!!!`);
    } else {
        alert(`Que lastima ${nombre}, porque programar es emocionante!!!`);
    }
})

let texto = document.querySelector('.texto');
let mensaje = document.querySelector('.mensaje');

texto.addEventListener('keyup', (evento) => {
    //mensaje.innerHTML = mensaje.innerHTML + evento.key
    console.log(evento.target)
    mensaje.innerHTML = evento.target.value;
})

let button = document.querySelector('button');
let icon = document.querySelector('.icon');
let password = document.querySelector('#password');
button.addEventListener('click', (evento) => {

    if (evento.target.classList.contains('btn-danger')) {
        evento.target.classList.remove('btn-danger'); // eliminamos la clase btn-danger
        evento.target.classList.add('btn-primary'); // agregamos la clase btn-primary
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
        password.type = "text";
    } else {
        evento.target.classList.remove('btn-primary'); // eliminamos la clase btn-primary
        evento.target.classList.add('btn-danger'); // agregamos la clase btn-danger
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
        password.type = "password";

    }

})

let links = document.querySelectorAll('a[href^="https"]'); // busco todos los enlaces
console.log(links)
links.forEach((link) => { // por cada uno de los enlaces
    link.addEventListener('click', (evento) => { // añadimos un escuchador de eventos (click)
        evento.preventDefault(); // evitamos que nos lleve al sitio que tiene asignado
    })
})

function action() {
    window.open("http://4geeks.com", "_blank");
    boton.removeEventListener('click', action);
}

let boton = document.querySelector('.boton');
boton.addEventListener('click', action)

let lista = document.querySelector('.list-group');

let elmLIs = document.querySelectorAll('.list-group-item')
elmLIs.forEach((li) => {
    li.addEventListener('click', (e) => {
        alert(e.target.innerHTML);
    })
}) 

let li = document.createElement('li')
li.classList.add('list-group-item')
li.innerHTML = "Elemento agregado usando DOM"
li.addEventListener('click', (e) => {
    alert(e.target.innerHTML);
})

lista.appendChild(li)

