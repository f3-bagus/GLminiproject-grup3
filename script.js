$(document).ready(function() {
    // Enlarge product image on hover and restore to original size on mouse leave
    $('.img-product').mouseenter(function() {
      $(this).css('transform', 'scale(1.2)');
    }).mouseleave(function() {
      $(this).css('transform', 'scale(1)');
    });
});