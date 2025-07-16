$(document).ready(function() {
  // Show home section by default
  $('#home').removeClass('hide');
  
  // Handle menu clicks
  $('.main-menu a').click(function() {
    var target = $(this).attr('href');
    $('.content-region').addClass('hide');
    $(target).removeClass('hide');
    $('.main-menu a').removeClass('active');
    $(this).addClass('active');
  });
});