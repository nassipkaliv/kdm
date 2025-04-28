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
  const marketBlock = document.getElementById('scrollButtonWrap');
  if (window.scrollY > 100) {
      header.classList.add('active');
      marketBlock.classList.add('active');
  } else {
      header.classList.remove('active');
      marketBlock.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.buttonMobMenu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const bgShadow = document.querySelector('.bgShadow');
  const header = document.querySelector('.header');

  button.addEventListener('click', function() {
      mobileMenu.classList.toggle('mobile-menu_active');
      bgShadow.classList.toggle('active');
      button.classList.toggle('active');
      header.classList.toggle('active')
  });
});