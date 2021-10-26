import {  ElementFinder, element, by } from 'protractor';

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor () {
    this.paymentStep = element(by.partialLinkText('bank'));
  }

  public async addpayment(): Promise<void> {
    await this.paymentStep.click();
  }
}
