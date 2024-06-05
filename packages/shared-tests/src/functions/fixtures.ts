import { test as base, Page } from "@playwright/test";
import { Foo } from "./home";

export type Options = {}

export type Fixtures = {
  foo: Foo;
}

export const test = base.extend<Options & Fixtures>({

  foo: async ({page}, use) => {
    const foo = new Foo(page);

    await use(foo);
  }
});

export { expect } from "@playwright/test";