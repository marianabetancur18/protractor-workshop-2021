import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private addressStep: ElementFinder;

  constructor () {
    this.addressStep = $('#center_column > form > p > button');
  }

  public async addAddress(): Promise<void> {
    await this.addressStep.click();
  }
}
