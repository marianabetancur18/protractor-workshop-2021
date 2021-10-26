import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private shippingStep: ElementFinder;
  private shippingConditions: ElementFinder;

  constructor () {

    this.shippingStep = $('#cgv');
    this.shippingConditions = $('#form > p > button');
  }
  public async accceptConditions(): Promise<void> {
    await this.shippingConditions.click();
  }
  public async shippingOrder(): Promise<void> {
    await this.shippingStep.click();
  }
}
