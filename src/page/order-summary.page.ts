import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private ordersummary: ElementFinder;

  constructor () {
    this.ordersummary = $('#center_column .cheque-indent');
  }

  public async order(): Promise<String> {
    return  this.ordersummary.getText();
  }
}
