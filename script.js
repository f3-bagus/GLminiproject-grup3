$(document).ready(function() {
    // Enlarge product image on hover and restore to original size on mouse leave
    $('.img-product').mouseenter(function() {
        $(this).css('transform', 'scale(1.2)');
    }).mouseleave(function() {
        $(this).css('transform', 'scale(1)');
    });
    
    // Handle Buy button click event
    $('.btn-buy').click(function() {
        var productTitle = $(this).closest('.card').find('.card-title').text();
        var productDescription = $(this).closest('.card').find('.card-text').text();
        var productPrice = $(this).closest('.card').find('.card-price.pt-3').text();

        $('#productDetails').html(
            '<h5>' + productTitle + '</h5>' +
            '<p>' + productDescription + '</p>' +
            '<h5>' + productPrice + '</h5>'
        );

        $('#productModal').modal('show');
    });
});