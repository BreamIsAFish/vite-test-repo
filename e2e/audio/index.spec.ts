import test, { expect } from "@playwright/test";

test.describe("Dmind normal flow (AUDIO method & LOW severity level)", () => {
  test("should able to play through", async ({ page }) => {
    await page.goto("/vid", { timeout: 10000 });
    await expect(page.getByText("0")).toBeVisible();
    await expect(page.getByText("Go next")).toBeDisabled();
    await page.getByText("Play audio").click();

    await page.getByText("Go next").click();
    // await expect(page.getByText("Yay!")).toBeVisible();
    // await page.getByText("OK").click();

    await expect(page.getByText("1")).toBeVisible();
    await expect(page.getByText("Go next")).toBeDisabled();
    await page.getByText("Play audio").click();

    await page.getByText("Go next").click();
    // await expect(page.getByText("Yay!")).toBeVisible();
    // await page.getByText("OK").click();

    await expect(page.getByText("2")).toBeVisible();
    await expect(page.getByText("Go next")).toBeDisabled();
  });
});
