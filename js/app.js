const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',   
  spaceBetween: 30,        
  speed: 200000,            
  autoplay: {
    delay: 0,              
    disableOnInteraction: false, 
  },
  grabCursor: true,        
  allowTouchMove: true,    
  freeMode: false,         
});

window.addEventListener('scroll', function() {
  const header = document.getElementById('scrollHeaderMenu');
  if (window.scrollY > 100) {
      header.classList.add('active');
  } else {
      header.classList.remove('active');
  }
});