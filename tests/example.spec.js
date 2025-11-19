// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TurnoRD/);

  // create a locator for the first button
  const getStarted = page.getByRole('link', { name: 'Empieza Gratis' }).first();

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', 'panel-negocio.html');

  await page.screenshot({ path: 'verification/verification.png', fullPage: true });
});
