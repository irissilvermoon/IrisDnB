



$(document).ready(function() {
  $('h1').on('click', function(event) {
    var $h1 = $(event.currentTarget)
    $h1.next().slideToggle("slow")
  });
});