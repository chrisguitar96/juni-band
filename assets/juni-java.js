document.addEventListener('DOMContentLoaded', function () {
    var menuCheckbox = document.getElementById('menuCheckbox');
    var sidebar = document.getElementById('sidebar');

    // Add a click event listener to each menu item
    var menuItems = sidebar.querySelectorAll('li a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            // Close the menu by unchecking the checkbox
            menuCheckbox.checked = false;
        });
    });
});

/* GALLERY AUTO SCROLLING */

document.addEventListener("DOMContentLoaded", function () {
    const imageSlider = document.querySelector(".image-slider");
  
    // Set the scroll speed (you can adjust this value, use a number smaller than 1 for slower scroll)
    const scrollSpeed = 0.2;
  
    // Set the initial scroll direction
    let scrollDirection = 1; // 1 for right, -1 for left
  
    // Function to scroll images
    function scrollImages() {
      imageSlider.scrollLeft += scrollDirection * scrollSpeed;
  
      // Check if we reached the end and change direction
      if (imageSlider.scrollLeft >= imageSlider.scrollWidth - imageSlider.clientWidth) {
        scrollDirection = -1; // Change direction to left
      } else if (imageSlider.scrollLeft <= 0) {
        scrollDirection = 1; // Change direction to right
      }
    }
  
    // Set interval for scrolling
    let scrollInterval = setInterval(scrollImages, 10);
  
    // Pause scrolling when mouse enters the slider
    imageSlider.addEventListener("mouseenter", function () {
      clearInterval(scrollInterval);
    });
  
    // Resume scrolling when mouse leaves the slider
    imageSlider.addEventListener("mouseleave", function () {
      scrollInterval = setInterval(scrollImages, 10);
    });
  });
  
  
  
