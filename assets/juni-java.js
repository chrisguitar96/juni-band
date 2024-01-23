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
