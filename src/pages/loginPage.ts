import { Page } from 'playwright';

export class LoginPage {
  private page: Page;
  private usernameInput = 'xpath=//input[@data-test="username"]';
  private passwordInput = 'xpath=//input[@data-test="password"]';
  private loginButton = 'xpath=//input[@data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
