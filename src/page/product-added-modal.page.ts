import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tShirtAdd: ElementFinder;

  constructor () {
    this.tShirtAdd = $('.button-container a');
  }

  public async tshirtAdd(): Promise<void> {
    await this.tShirtAdd.click();
  }
}
