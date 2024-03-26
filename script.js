// Script to show the corresponding submenu with clicking on any of the buttons in the nav bar
// By Paulette Herrera 2024

document.addEventListener('DOMContentLoaded', function () {
    const mainNavButtons = document.querySelectorAll('.main-nav-button');
    const submenus = document.querySelectorAll('.submenu');
  
    mainNavButtons.forEach((button, index) => {
      button.addEventListener('mouseenter', () => {
        // Hide all submenus
        submenus.forEach(submenu => submenu.style.display = 'none');
        // Show the corresponding submenu
        submenus[index].style.display = 'block';
      });
  
      button.addEventListener('mouseleave', () => {
        // Delay hiding the submenu
        setTimeout(() => {
          // Check if the submenu is being hovered over
          if (!submenus[index].matches(':hover')) {
            submenus[index].style.display = 'none';
          }
        }, 3000); // Adjust the delay time as needed (in milliseconds)
      });
    });
  
    submenus.forEach((submenu, index) => {
      submenu.addEventListener('mouseenter', () => {
        // Clear the timeout to prevent hiding the submenu
        clearTimeout(submenus[index].hideTimeout);
      });
  
      submenu.addEventListener('mouseleave', () => {
        // Delay hiding the submenu
        submenus[index].hideTimeout = setTimeout(() => {
          submenus[index].style.display = 'none';
        }, 3000); // Adjust the delay time as needed (in milliseconds)
      });
    });
});
