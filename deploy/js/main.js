$(document).ready(function() {
  toggleBurgerMenu();
  initSideNavToggle();
});

function toggleBurgerMenu() {
  $('#side-nav-toggle').on('click', function(){
    $(this).toggleClass('active');
    $('#sidebar-menu').toggleClass('closed')
    if($('#collapseOne').hasClass('in')) $('#collapseOne').toggleClass('in');
    if($('#collapseTwo').hasClass('in')) $('#collapseTwo').toggleClass('in');
  });
}

function initSideNavToggle() {
  $('.collection-toggle').on('click', function(){
    if($('#sidebar-menu').hasClass('closed')){
      $('#sidebar-menu').toggleClass('closed');
      $('#side-nav-toggle').toggleClass('active');
    }
  });

}
