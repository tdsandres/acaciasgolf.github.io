// seleccionar elementos
const $ = (element) => document.querySelector(element); 

// scroll
const $btnWsp = $('.whatsapp');
const $imgMain = document.querySelectorAll('#main-img')
window.onscroll = () => {
    //wsp
    // console.log(window.scrollY)
    window.scrollY > 550 && window.scrollY < 3000 ? $btnWsp.style.display = 'flex' : $btnWsp.style.display = 'none';   

}

// comentarios 
const $commentDescrip = $('.comentario-description')
const $commentName = $('.comentario-nombre')
const $commentWrapper = $('.box-comment')

let listComment = [
    {
        "nombre": "Myriam Sandobal",
        "comentario": "Muy lindo lugar. Muy recomendable y excelente atención de Lorena la dueña"
    }, 
    {
        "nombre": "Karina",
        "comentario": "Muy lindo lugar para disfrutar. Muy buena la atención de su dueña y empleados. Recomendable!"
    },
    {
        "nombre": "Ainelen Berrettoni", 
        "comentario": "Muy lindo lugar. Una tranquilidad, un paisaje hermoso. La gente muy tranquila. Todo muy limpio. La verdad súper recomendado para los que quieran pasar un buen momento. Impecable"
    }
]

document.addEventListener('DOMContentLoaded', () => {

    // comentarios

    let numComment = 0;

    setInterval(() => {
     
        let commentRan = Math.round(Math.random(0, listComment.length)); 

        if (commentRan !== numComment){
            numComment = commentRan

            $commentDescrip.style.animation = 'left 1s'
            $commentName.style.animation = 'left 1s'
            $('.stars').style.animation = 'left 1s'
            setTimeout(() => {
    
                $commentDescrip.innerHTML = listComment[numComment]["comentario"]
                $commentName.innerHTML = listComment[numComment]["nombre"]
                $commentDescrip.style.animation = 'right 1s'
                $commentName.style.animation = 'right 1s'
                $('.stars').style.animation = 'right 1s'
    
            }, 1000)
        } else {
            numComment = Math.round(Math.random(0, listComment.length)); 
        }

    }, 3500)
});

// servicios btns {}

const $more = $('#more'); 
const $lbMore = document.querySelectorAll('#labelMore'); 

$lbMore.forEach((btn) => {
    btn.addEventListener('click', (el) => {
        if (el.target.firstElementChild.innerHTML == '+'){
            el.target.firstElementChild.innerHTML = '—'
        } else {
            el.target.firstElementChild.innerHTML = '+'
        }
    })
})

// menu
const $btnMenu = document.querySelectorAll('.icon')
let menuOp = false; 



$btnMenu.forEach((el) => {
    el.addEventListener('click', () => {
    
        !menuOp ? $('.nav-mb').style.marginTop = 0 : $('.nav-mb').style.marginTop = '-100vh'
        menuOp = !menuOp
        
    })
})

// crear cabañas
const $containerCab = $('#contenedor-cabanias')

let cabanias = [
        {
            id: 0,
            titulo: "Cabaña 1",
            img: "./assets/img/cabanas/cabana1/0.jpg",
            capacity: 6,
            size: 110,
            description: "2 habitaciones con cama matrimonial y 2 baños", 
            carpeta: 'cabana1'
        }, 
        {
            id: 1,
            titulo: "Cabaña 3",
            img: "./assets/img/cabanas/cabana3/0.jpg",
            capacity: 4,
            size: 70,
            description: "2 Plantas 2 Baños", 
            carpeta: 'cabana3'
        },
        {
            id: 2,
            titulo: "Cabaña 4",
            img: "./assets/img/cabanas/cabana4/0.jpg",
            capacity: 2,
            size: 60,
            description: "2 ambientes en planta baja", 
            carpeta: 'cabana4'
        },
        {
            id: 3,
            titulo: "Cabaña 5",
            img: "./assets/img/cabanas/cabana5/0.jpg",
            capacity: 2,
            size: 35,
            description: "2 ambientes planta baja", 
            carpeta: 'cabana5'
        },
        {
            id: 4,
            titulo: "Cabaña 7",
            img: "./assets/img/cabanas/cabana7/0.jpg",
            capacity: 2,
            size: 60,
            description: "2 ambientes en planta baja", 
            carpeta: 'cabana7'
        },
        {
            id: 5,
            titulo: "Cabaña 8",
            img: "./assets/img/cabanas/cabana8/0.jpg",
            capacity: 2,
            size: 60,
            description: "2 ambientes en planta baja", 
            carpeta: 'cabana8'
        },
        
    ]



cabanias.forEach((el) => {
    // console.log(el.titulo)

    let div = document.createElement("div")

    div.id = "btn-toggle"
    div.className = `box ${el.id}`; 
    div.innerHTML = `
    <div class="img" id="hiperv-cab">
        <img src="${el.img}">
    </div>
    <div class="info">
        <h1 id="hiperv-cab">${el.titulo}</h1>
        <p>Capacidad: <span>${el.capacity} PERSONAS</span> — Tamaño: <span>${el.size}M2</span></p>
        <p class="desc">${el.description}</p>
        <div class="contact">
            <button>Contactar</button>
        </div>
    </div>
    `

    $containerCab.appendChild(div);
})

// slider main

const $slider = $('#slider')
let sliderBox = document.querySelectorAll('.box-img')
let sliderBoxLast = sliderBox[sliderBox.length - 1]

const $btnL = $('#btn-left')
const $btnR = $('#btn-right')

$slider.insertAdjacentElement('afterbegin', sliderBoxLast)

function nextImg(){
    let firstSlider = document.querySelectorAll('.box-img')[0]
    $slider.style.marginLeft = "-200%"
    $slider.style.transition = "all 0.5s"
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement('beforeend', firstSlider)
        $slider.style.marginLeft = "-100%"
    }, 500)
}

function prevImg(){
    let sliderBox = document.querySelectorAll('.box-img')
    let sliderBoxLast = sliderBox[sliderBox.length - 1]
    $slider.style.marginLeft = "0"
    $slider.style.transition = "all 0.5s"
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement('afterbegin', sliderBoxLast)
        $slider.style.marginLeft = "-100%"
    }, 500)
}

$btnR.addEventListener('click', nextImg)
$btnL.addEventListener('click', prevImg)

setInterval(nextImg, 8000)

// abrir galeria

let $boxCab = $('.box-info-cab')
let abierto = false
let btnsToggle = document.querySelectorAll('#btn-toggle')
let btnsToggleClose = document.querySelectorAll('#btn-toggle-close')
let $titulito = $('#titulito')
let $galeria = $('.gallery')

btnsToggle.forEach((el) => { 
  el.addEventListener('click', () => {
    let idCab = el.classList[1]
    let cab = cabanias[idCab]

    console.log(cab.carpeta)
    $titulito.innerHTML = cab.titulo

    for(let i = 0; i < 8; i++){
        let div = document.createElement("a")

        div.className = `item`; 
        div.innerHTML = `
        <a class="item" data-lightbox="models" data-title="${cab.titulo}" href="./assets/img/cabanas/${cab.carpeta}/${i}.jpg">
            <img src="./assets/img/cabanas/${cab.carpeta}/${i}.jpg" alt="${cab.titulo}">
        </a>`

        $('.gallery').appendChild(div)
    }


    if (!abierto){ 
      $boxCab.style.animation = "abrir 0.7s"
      $boxCab.style.display = "flex"
      abierto = true
    }
  })
})

btnsToggleClose.forEach((el) => { 
    el.addEventListener('click', () => {
     
      while ($galeria.firstChild){
        $galeria.removeChild($galeria.firstChild)
      }

      if (abierto){ 
        $boxCab.style.animation = "cerrar 1s"
        setTimeout(() => {
        $boxCab.style.display = "none"
        abierto = false
        }, 900)
      }
    })
  })