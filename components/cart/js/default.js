import HasEvents from "components/common/event";
import InCartCheck from "components/cart/in_cart_check";

class Cart extends HasEvents {
    constructor () {
        this.products = [];
    };

    addProduct (product) {
        var oldPrice = this.getPriceInfo();
        this.products.push(product);
        var newPrice = this.getPriceInfo();

        if (oldPrice.complete != newPrice.complete) {
            this.trigger("PriceChanged");
        }

        this.trigger("ProductAdded");
    };

    addCoupon () {
        this.trigger("PriceChanged");
        this.trigger("CouponAdded");
    };

    isInCart (productId) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === productId) {
                return true;
            }
        }

        return false;
    };

    getPriceInfo () {
        var priceInfo = {
            complete: 0
        };

        for (var i = 0; i < this.products.length; i++) {
            priceInfo += this.products[i].price;
        }

        return priceInfo;
    }
};

export default cart = new Cart();