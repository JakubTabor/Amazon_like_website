import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

async function loadPage() {
  console.log('load page');
  return 'value2';
}
loadPage().then((value) => {
  console.log('next step');
  console.log(value);
});

Promise.all([
  loadProductsFetch(),
  new Promise( (resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

