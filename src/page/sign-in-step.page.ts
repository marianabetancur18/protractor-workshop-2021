import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private signIn: ElementFinder;

  constructor () {
    this.signIn = $('#SubmitLogin');
  }

  public async singInOption(): Promise<void> {
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await this.signIn.click();
  }
}
