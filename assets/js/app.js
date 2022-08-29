// seleccionar elementos
const $ = (element) => document.querySelector(element); 

// scroll
const $btnWsp = $('.whatsapp');
const $imgMain = document.querySelectorAll('#main-img')
window.onscroll = () => {
    //wsp
    console.log(window.scrollY)
    window.scrollY > 550 && window.scrollY < 3000 ? $btnWsp.style.display = 'flex' : $btnWsp.style.display = 'none';   

    $imgMain.forEach((el) => {
        if (window.scrollY > 100){
            el.style.transform = 'scale(1.1)'
            $slider.style.width = '410%'
        } 
        if (window.scrollY > 200) {
            el.style.transform = 'scale(1.2)'
            $slider.style.width = '430%'
        } 
        if (window.scrollY > 300) {
            el.style.transform = 'scale(1.3)'
            $slider.style.width = '460%'
        }
        
        if (window.scrollY > 400) {
            el.style.transform = 'scale(1.4)'
            $slider.style.width = '490%'
        }

    })

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
            titulo: "Cabaña 1",
            img: "https://i.pinimg.com/originals/0b/af/50/0baf509de204cf32bb612b34f7bae734.jpg",
            capacity: 6,
            size: 193,
            description: "2 habitaciones con cama matrimonial y 2 baños"
        }, 
        {
            titulo: "Cabaña 3",
            img: "https://www.yankodesign.com/images/design_news/2022/03/auto-draft/09_casazgz_ihouse_prefabhome.jpg",
            capacity: 4,
            size: 6,
            description: "2 Plantas 2 Baños"
        },
        {
            titulo: "Cabaña 4",
            img: "https://www.thespruce.com/thmb/EdY8jfEJJZMQxcEUpTupMWI1-Rg=/420x0/filters:no_upscale():max_bytes(150000):strip_icc()/andrea-davis-IWfe63thJxk-unsplash-ed2a4a77a0bb40bc8b4247355480977e.jpg",
            capacity: 2,
            size: 2,
            description: "2 ambientes en planta baja"
        },
        {
            titulo: "Cabaña 5",
            img: "https://thedesigngesture.com/wp-content/uploads/2021/10/modern-island-cabin-design-1000x667-1-1024x602.jpg",
            capacity: 2,
            size: 6,
            description: "Lorem ipsum dolor sit amet, in nam denique suavitate repudiandae, homero dictas omnesque duo et. Novum dignissim consectetuer ei mel. Ne patrioque consequat persequeris usu, duo inani imperdiet deseruisse in, no tation"
        },
        {
            titulo: "Cabaña 7",
            img: "https://thedesigngesture.com/wp-content/uploads/2021/10/modern-island-cabin-design-1000x667-1-1024x602.jpg",
            capacity: 2,
            size: 6,
            description: "2 ambientes en planta baja"
        },
        {
            titulo: "Cabaña 8",
            img: "https://thedesigngesture.com/wp-content/uploads/2021/10/modern-island-cabin-design-1000x667-1-1024x602.jpg",
            capacity: 2,
            size: 6,
            description: "2 ambientes en planta baja"
        },
        
    ]

cabanias.forEach((el) => {
    // console.log(el.titulo)

    let div = document.createElement("div")

    div.className = "box"; 
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

    $containerCab.appendChild(div)
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