$(document).ready(function () {
  var slider = $('.slider').bxSlider({
    minSlides: 1,
    maxSlides: 67,
    pager: false,
  });

  if(window.innerWidth<=972){
    $('#rightbarul').hide();
    $('#close').hide();
  
    $('#open').click(function () {
      $('#rightbarul').show();
      $('#open').hide();
      $('#close').show();
  
    })
    $('#close').click(function () {
      $('#rightbarul').hide();
      $('#close').hide();
      $('#open').show();
  
    })
  }
  if(window.innerWidth>972){
    $('#rightbarul').show();
    
  }

});