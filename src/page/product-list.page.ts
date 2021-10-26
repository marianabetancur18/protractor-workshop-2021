import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private productList: ElementFinder;

  constructor () {
    this.productList = $('#center_column .ajax_add_to_cart_button');
  }

  public async productListpage(): Promise<void> {
    await this.productList.click();
  }
}
