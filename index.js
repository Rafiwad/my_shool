document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu ul');

  menuIcon.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });
});

// Toggle expanded state for each list-aims section when clicked

const listAims = document.querySelectorAll('.list-aims');

listAims.forEach(item => {
    item.addEventListener('click', () => {
        // Collapse all other sections
        listAims.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('expanded');
            }
        });

        // Toggle the clicked section
        item.classList.toggle('expanded');
    });
});
