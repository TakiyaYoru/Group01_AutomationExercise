import { expect, test } from '@playwright/test';
import {
  addFirstProductFromProductsPage,
  deleteCurrentUser,
  gotoHome,
  loginUser,
  logoutUser,
  openSignupLogin,
  payAndConfirm,
  proceedCheckout,
  registerUser,
} from '../utils/app';
import { makeUser } from '../utils/test-data';

test.describe('Checkout', () => {
  test('TC24 - Register while Checkout', async ({ page }) => {
    const user = makeUser('tc24');
    await gotoHome(page);
    await addFirstProductFromProductsPage(page);
    await proceedCheckout(page);

    await page.getByRole('link', { name: /Register \/ Login/i }).click();
    await registerUser(page, user);

    await page.getByRole('link', { name: /Cart/i }).click();
    await proceedCheckout(page);
    await page.locator('textarea[name="message"]').fill('Please deliver during office hours.');
    await page.getByRole('link', { name: /Place Order/i }).click();
    await payAndConfirm(page);

    await expect(page.getByText('Order Placed!')).toBeVisible();
    await deleteCurrentUser(page);
  });

  test('TC25 - Register before Checkout', async ({ page }) => {
    const user = makeUser('tc25');
    await registerUser(page, user);
    await addFirstProductFromProductsPage(page);
    await proceedCheckout(page);

    await page.getByRole('link', { name: /Place Order/i }).click();
    await payAndConfirm(page);

    await expect(page.getByText('Order Placed!')).toBeVisible();
    await deleteCurrentUser(page);
  });

  test('TC26 - Login before Checkout', async ({ page }) => {
    const user = makeUser('tc26');
    await registerUser(page, user);
    await logoutUser(page);

    await loginUser(page, user.email, user.password);
    await addFirstProductFromProductsPage(page);
    await proceedCheckout(page);

    await page.getByRole('link', { name: /Place Order/i }).click();
    await payAndConfirm(page);

    await expect(page.getByText('Order Placed!')).toBeVisible();
    await deleteCurrentUser(page);
  });

  test('TC27 - Verify Address Details', async ({ page }) => {
    const user = makeUser('tc27');
    await registerUser(page, user);
    await addFirstProductFromProductsPage(page);
    await proceedCheckout(page);

    await expect(page.locator('#address_delivery')).toContainText(user.address1);
    await expect(page.locator('#address_delivery')).toContainText(user.city);
    await expect(page.locator('#address_delivery')).toContainText(user.state);

    await expect(page.locator('#address_invoice')).toContainText(user.address1);
    await expect(page.locator('#address_invoice')).toContainText(user.city);
    await expect(page.locator('#address_invoice')).toContainText(user.state);

    await deleteCurrentUser(page);
  });

  test('TC28 - Download Invoice', async ({ page }) => {
    const user = makeUser('tc28');
    await registerUser(page, user);
    await addFirstProductFromProductsPage(page);
    await proceedCheckout(page);

    await page.getByRole('link', { name: /Place Order/i }).click();
    await payAndConfirm(page);

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('link', { name: /Download Invoice/i }).click(),
    ]);

    expect(download.suggestedFilename().length).toBeGreaterThan(0);
    await deleteCurrentUser(page);
  });

  test('TC29 - Payment Validation', async ({ page }) => {
    const user = makeUser('tc29');
    await registerUser(page, user);
    await addFirstProductFromProductsPage(page);
    await proceedCheckout(page);

    await page.getByRole('link', { name: /Place Order/i }).click();
    await page.locator('[data-qa="name-on-card"]').fill('Playwright Tester');
    await page.locator('[data-qa="card-number"]').fill('');
    await page.locator('[data-qa="cvc"]').fill('123');
    await page.locator('[data-qa="expiry-month"]').fill('12');
    await page.locator('[data-qa="expiry-year"]').fill('2030');
    await page.locator('[data-qa="pay-button"]').click();

    const cardInput = page.locator('[data-qa="card-number"]');
    const validationMessage = await cardInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage.length).toBeGreaterThan(0);

    await page.goBack();
    await deleteCurrentUser(page);
  });

  test('TC30 - Confirm Order', async ({ page }) => {
    const user = makeUser('tc30');
    await registerUser(page, user);
    await addFirstProductFromProductsPage(page);
    await proceedCheckout(page);

    await page.getByRole('link', { name: /Place Order/i }).click();
    await payAndConfirm(page);

    await expect(page.getByText('Order Placed!')).toBeVisible();
    await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();

    await deleteCurrentUser(page);
  });
});
