

//toggle menu
var toggleMenu = document.querySelector('.toggle');
var toggleMenu__i = document.querySelector('.toggle i');
var menu = document.querySelector('.items');



// scroll top 
var scroll = document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {

  scroll.classList.toggle('scrollActive' , window.scrollY > 500)

})

function scrollToTop() {
  
    // Scroll to top logic
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
}



function toggleMenuFunction() {
  menu.classList.toggle('active');
  if(menu.classList.contains('active')) {
    toggleMenu__i.setAttribute('class', 'bx bx-x');
  }else {
    toggleMenu__i.setAttribute('class', 'bx bx-menu');
  }
}

