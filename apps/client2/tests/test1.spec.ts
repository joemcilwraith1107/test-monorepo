import {test, expect} from "@shared-tests"

test("Load the page and check for an element", async({foo}) => {
  const response = await foo.loadPage();

  expect(response.status()).toBe(200)
})