const cavalo = document.querySelector('.cavalo');
const pipe = document.querySelector('.pipe');



const jump = () => {
   cavalo.classList.add('jump');

   setTimeout( () => {
    cavalo.classList.remove('jump');
   } , 500);

}


const loop = setInterval( () => {
    const pipePosition = pipe.offsetLeft;
    const cavaloPosition = window.getComputedStyle(cavalo).bottom.replace('px', '');

    if (pipePosition <= 125 && cavaloPosition <= 60) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        var mensagem = document.getElementById("mensagem");
      mensagem.innerHTML = "GAME OVER";
      
    }
    
} , 10);

document.addEventListener('keydown', jump);









