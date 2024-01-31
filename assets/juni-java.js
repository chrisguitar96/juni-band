// MENU

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

/* GALLERY */
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");

  let maxScrollLeft = imageList.scrollWidth - imageList.clientWidth; // Move this line to the outer scope

  // Handle Scrollbar Thumb Drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    //Update Thumb Position on Mouse Move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    // Remove Event Listeners on Mouse Up
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Add Event Listeners for Drag Interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to slide button clicks
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  // Update scrollbar position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
};

window.addEventListener("load", initSlider);
