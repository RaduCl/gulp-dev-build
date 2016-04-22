$(document).ready(function() {
  initBurgerMenu();
});

function initBurgerMenu() {
  $('#side-nav-toggle').on('click', function(){
    $(this).toggleClass('active');
  });
}
