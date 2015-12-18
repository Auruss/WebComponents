import cart from "components/cart";

lib.contentChanged(function () {
    $('.product').each(function () {
        var id = $(this).data('product-id');
        if (cart.isInCart(id)) {
            $(this).find('.in-cart').html('In Cart!');
        } else {
            $(this).find('.in-cart').html('Not In Cart!');
        }
    });
});