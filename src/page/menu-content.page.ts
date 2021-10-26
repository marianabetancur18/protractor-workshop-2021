import { ElementFinder, $ } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    // this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
    this.tShirtMenu = $('#block_top_menu > ul[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"] > li:nth-child(3) > a');
  }

  public async goToTShirtMenu(): Promise<void> {
    // await this.tShirtMenu.click();
    await this.tShirtMenu.click();
  }
}
