var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
x.style.left='-400px';
y.style.left='50px';
z.style.left='110px';
}
function login()
{
x.style.left='50px';
y.style.left='450px';
z.style.left='0px';
}

  var modal = document.getElementById('login-wrapper');
  window.onclick = function(event) 
  {
      if (event.target == modal) 
      {
          modal.style.display = "none";
      }
  }

  const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons//

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

//counter//

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Buttons Listeners//

nextBtn.addEventListener ('click', ()=> {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener ('click', ()=> {
    if(counter <= 0) return; 
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () =>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
