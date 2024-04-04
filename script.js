$(document).ready(function () {
  $(".img-product")
    .mouseenter(function () {
      $(this).css("transform", "scale(1.1)");
    })
    .mouseleave(function () {
      $(this).css("transform", "scale(1)");
    });

  $(".btn-buy").click(function () {
    var productTitle = $(this).closest(".card").find(".card-title").text();
    var productDescription = $(this).closest(".card").find(".card-text").text();
    var productPrice = $(this).closest(".card").find(".card-price.pt-3").text();

    $("#productDetails").html(
      "<h5>" +
        productTitle +
        "</h5>" +
        "<p>" +
        productDescription +
        "</p>" +
        "<h5>" +
        productPrice +
        "</h5>"
    );

    $("#productModal").modal("show");
  });

  $(".message-form").submit(function(event) {
    var form = $(this);
    var formData = form.serialize();
    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: formData,
      success: function(response) {
        swal({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          button: "OK",
        });
        form[0].reset();
      },
      error: function(xhr, status, error) {
        swal({
          title: "Error!",
          text: "An error occurred while sending your message : " + error,
          icon: "error",
          button: "OK",
        });
      }
    });
    event.preventDefault();
  });
});
