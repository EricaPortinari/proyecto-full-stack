const images = document.querySelectorAll('.hab1, .hab2, .hab3, .hab4, .hab5, .hab6, .imgicon');
const imageContainer = document.querySelector('.contenedorimg');

images.forEach(image =>{
  image.addEventListener('click', ()=>{
      imageContainer.classList.toggle('mover');
  })
})

imageContainer.addEventListener('click', ()=>{
    imageContainer.classList.toggle('mover');
})

/*--------------------------Servicios-------------- */
const serv = document.querySelectorAll('.ser1, .ser2, .ser3, .ser4, .ser5, .ser6');
const servContainer = document.querySelector('.contenedorserv');

serv.forEach(servicios =>{
  image.addEventListener('click', ()=>{
      servContainer.classList.toggle('mover'); 
  })
})

servContainer.addEventListener('click', ()=>{
    servContainer.classList.toggle('move');
})
