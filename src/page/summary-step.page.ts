import { ElementFinder, element, by } from 'protractor';

export class SummaryStepPage {
  private summaryStep: ElementFinder;

  constructor () {
    // this.summaryStep = $('.cart_navigation clearfix a');
    this.summaryStep = element(by.partialLinkText('checkout'));
  }

  public async summaryStepcart(): Promise<void> {
    await this.summaryStep.click();
  }
}
