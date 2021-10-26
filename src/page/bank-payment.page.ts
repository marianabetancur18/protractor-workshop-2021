import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor () {
    this.bankPayment = $('#cart_navigation > button');
  }

  public async selecctPayment(): Promise<void> {
    await this.bankPayment.click();
  }
}
