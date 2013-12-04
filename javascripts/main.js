
$(document).ready(function() {
  $('h1').on('click', function(event) {
    var $h1 = $(event.currentTarget)
    $('.content').not($h1.next()).hide("slow")
    $h1.next().slideToggle("slow")
  });

  $('.gallery-images').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
});