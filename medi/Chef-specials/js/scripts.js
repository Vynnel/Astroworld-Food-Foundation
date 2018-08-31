$(document).ready(function() {
  $(".clickable").click(function() {
    $(".init-showing").fadeIn();
    $(".init-hidden").fadeOut();
  });
});
