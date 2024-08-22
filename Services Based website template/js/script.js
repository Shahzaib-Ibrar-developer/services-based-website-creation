

// toggle menu

let headerContent = document.querySelector('.header-content');
let navItemsMobile = document.querySelector('.nav-items-mobile')
let toggleBtn = document.getElementById('menu-icon');



toggleBtn.addEventListener('click', () => {
    navItemsMobile.classList.toggle('right-remove')
    navItemsMobile.classList.toggle('right-add')

    if (navItemsMobile.classList.contains('right-remove')) {
        headerContent.style.paddingTop = `${navItemsMobile.offsetHeight + 100}px`;
    } else {
        headerContent.style.paddingTop = headerContent.style.paddingBottom;
    }

})




// buttons redirect link in header

let buttons = document.querySelectorAll('.buttons-header button');

buttons.forEach((btn)=>{
   btn.addEventListener('click',()=>{
    window.open('https://colorlib.com/wp/themes/illdy/')
   })
    
})




// latest news buttons redirect link
let latestNewsButton = document.querySelector('.latest-news-text-content button');

latestNewsButton.addEventListener('click',()=>{
    window.open('https://colorlibhub.com/illdy/blog-2/')
})


















// swiper js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Make the dots clickable
    },

  });