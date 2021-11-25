const carrusel = document.querySelector('.carrusel')

let intervalo = null;
let scrollMaxWith = carrusel.scrollWidth-carrusel.clientWidth;
let step = 1;
const start = ()=>{
    intervalo = setInterval(() => {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if(carrusel.scrollLeft === scrollMaxWith){
        step = step * (-1);
        }else if(carrusel.scrollLeft === 0){
            step = step * (-1)
        }
    }, 10);
    
}

start()