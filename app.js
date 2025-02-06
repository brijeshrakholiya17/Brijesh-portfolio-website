// let menu_icon = document.querySelector('.menu_icon');
// let cross_icon = document.querySelector('.cross_icon');
// let menu_bar = document.querySelector('.menu_bar');

// open_menu = () => {
    
//     menu_bar.style.display = 'block';
//     menu_icon.style.display = 'none';
//     cross_icon.style.display = 'block';
// }
// close_menu = () => {
//     menu_bar.style.display = 'none';
//     menu_icon.style.display = 'block';
//     cross_icon.style.display = 'none';
// }

// menu_icon.addEventListener('click',open_menu);
// cross_icon.addEventListener('click',close_menu);

let menu = document.querySelector('.menu');
let menu_icon = document.querySelector('.menu_icon');
let cross_icon = document.querySelector('.cross_icon');

function toggleMenu() {
    let menu = document.querySelector('.menu');
    if (menu.style.right === "-250px") {
      menu.style.right = "0";
      menu_icon.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    } else {
      menu.style.right = "-250px";
      menu_icon.innerHTML = "<i class='fa-solid fa-bars'></i>";
    }
  }



document.addEventListener("DOMContentLoaded", function() {
  var currentIndex = 0;
  var slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  }

  // Show the first slide initially
  showSlide(currentIndex);

  document.querySelector(".prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  document.querySelector(".nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
});



  


  