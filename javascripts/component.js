function showFullArticle() {
  $('.box-article').attr('style', "height: ''");
  $('.btn-show-more').addClass('hidden');
}

function increaseQuantity(form) {
  var input = form.getElementsByTagName('input')[0];

  var value = input.value;

  if (value == '') {
    input.value = 0;
  } else {
    input.value = parseInt(value) + 1;
  }
}

function decreaseQuantity(form) {
  var input = form.getElementsByTagName('input')[0];

  var value = input.value;

  if (value == '') {
    input.value = 0;
  } else {
    var valueInt = parseInt(value);
    input.value = (valueInt <= 0) ? 0 : valueInt - 1
  }
}
