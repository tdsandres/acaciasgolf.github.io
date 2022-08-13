// seleccionar elementos
const $ = (element) => document.querySelector(element); 

// aparece whatsapp
const $btnWsp = $('.whatsapp');

window.onscroll = function() {
    // console.log(window.scrollY);
    if (window.scrollY > 550) {
        $btnWsp.style.display = 'flex'
    } else {
        $btnWsp.style.display = 'none'
    }
  };

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