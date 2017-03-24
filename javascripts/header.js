$(document).ready(function () {
  var scrollTop = $(document).scrollTop();

  if (scrollTop > 0){
    $('.navbar').addClass('header-black');
  } else {
    $('.navbar').removeClass('header-black')
  }

  $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 0){
        $('.navbar').addClass('header-black');
    } else {
        $('.navbar').removeClass('header-black')
    }
  });
});