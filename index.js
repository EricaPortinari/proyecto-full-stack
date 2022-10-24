const images = document.querySelectorAll('.hab1, .hab2, .hab3, .hab4, .hab5, .hab6, .imgicon');
const imageContainer = document.querySelector('.contenedorimg');
const containerimg = document.querySelector('.imgicon');
/*const copy = document.querySelector('copy')*/

images.forEach(image =>{
  image.addEventListener('click', ()=>{
      imageContainer.classList.toggle('mover');
      /*addImage(image.getAttribute('src'), image.getAttribute('alt'));*/
      console.log(image.getAttribute('src'));
      console.log(image.getAttribute('alt'));
        
    
  })
})

const addImage = (srcImage,altImage)=>{
    imageContainer.classList.toggle('mover');
    containerimg.src = srcImage;
    copy.innerHTML = altImage;
}

imageContainer.addEventListener('click', ()=>{
    imageContainer.classList.toggle('mover');
})

