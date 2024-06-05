import { Page, Response} from "@playwright/test";


export class Foo {
  page: Page;

  constructor(page: Page) {
    this.page = page
  }

  async loadPage(): Promise<Response> {
    let response = await this.page.goto('/')

    return response;
  }
}
