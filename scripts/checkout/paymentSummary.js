import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach( (cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity

    const deliveryoption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryoption.priceCents;
  });

  console.log(productPriceCents);
  console.log(shippingPriceCents);
}