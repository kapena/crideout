$(document).ready(function(){
  var pathname = window.location.pathname;
  $('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
});
