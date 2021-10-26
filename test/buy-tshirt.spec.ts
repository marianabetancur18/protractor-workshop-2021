import { $, browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
   SummaryStepPage, SignInStep, AddressStepPage, ShippingStepPage,
   PaymentStepPage, BankPaymentPage, OrderSummaryPage} from '../src/page';

describe('Open website', () => {
  it('it should be opened a website', async () => {
    await browser.get('http://automationpractice.com/');
  });
});

describe('Buy a t-shirt', () => {

  const menuContentPage : MenuContentPage = new MenuContentPage();
  const productListPage : ProductListPage = new ProductListPage();
  const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();
  const summarystep : SummaryStepPage = new SummaryStepPage();
  it('then should be bought a t-shirt', async () => {
    const ec = browser.ExpectedConditions;
    await menuContentPage.goToTShirtMenu();
    await browser.wait(ec.elementToBeClickable($('#center_column a.button.ajax_add_to_cart_button.btn.btn-default')), 8000);
    await productListPage .productListpage();
    const ed = browser.ExpectedConditions;
    // tslint:disable-next-line: max-line-length
    await browser.wait(ed.elementToBeClickable($('[style*="display: block;"] .button-container > a')), 8000);
    await productAddedModalPage.tshirtAdd();
    await summarystep.summaryStepcart();
  });
});

describe('log in', () => {
  const signIn : SignInStep = new SignInStep();
  it('then should be signed in to the website', async () => {
    await signIn.singInOption();
  });
});

describe('Adress selection' , () => {
  const address : AddressStepPage = new AddressStepPage();
  const shipping : ShippingStepPage = new ShippingStepPage();
  it('then should be an adress selected', async () => {
    await address.addAddress();
    await shipping.shippingOrder();
    await shipping.accceptConditions();
  });
});

describe('Bank payement' , () => {

  const payment : PaymentStepPage  = new PaymentStepPage();
  const bankpayment: BankPaymentPage = new BankPaymentPage();
  const ordersummary: OrderSummaryPage = new OrderSummaryPage();
  it('the T-shirt should be paid', async () => {
    await payment.addpayment();
    await bankpayment.selecctPayment();
    await expect(ordersummary.order()).toBe('Your order on My Store is complete.');
  });
});
