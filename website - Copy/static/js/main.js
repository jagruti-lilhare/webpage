
// owl carousel

$(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });

    $(".owl-prev").click(function(){
      owl.trigger("prev.owl.carousel");
    });

    $(".owl-next").click(function(){
      owl.trigger("next.owl.carousel");
    });
  });


  // toggle button
  document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.getElementById("dropdownMenuButton");
    var dropdownMenu = document.getElementById("dropdownMenu");

    dropdownButton.addEventListener("click", function() {
      dropdownMenu.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
      if (!event.target.matches("#dropdownMenuButton")) {
        if (dropdownMenu.classList.contains("show")) {
          dropdownMenu.classList.remove("show");
        }
      }
    });
  });

  function changeProduct(index) {
    // Your code to change the product based on the index
  }








