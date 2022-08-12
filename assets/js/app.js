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

let listComment = [
    {
        "nombre": "odfgkdfgkofgdkodfg",
        "comentario": "oofdgkodfgkodfgkogdfokdgfokdfg"
    }, 
    {
        "nombre": "fgd09ihfgi09495",
        "comentario": "fdghfog94639rhmidfhfg"
    }
]

document.addEventListener('DOMContentLoaded', () => {

    // comentarios

    let numComment = 0;

    setInterval(() => {
     
        let commentRan = Math.round(Math.random(0, listComment.length)); 

        $commentDescrip.innerHTML = listComment[numComment]["comentario"]
        $commentName.innerHTML = listComment[numComment]["nombre"]
        
        if (commentRan !== numComment){
            numComment = commentRan;
        }

        

    }, 2000)

});