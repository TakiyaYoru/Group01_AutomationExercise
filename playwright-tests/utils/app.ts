import { expect, Page } from '@playwright/test';
import { User } from './test-data';

export const gotoHome = async (page: Page) => {
  await page.goto('/');
  await expect(page).toHaveURL(/automationexercise\.com/);
};

export const openSignupLogin = async (page: Page) => {
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await expect(page.getByText('New User Signup!')).toBeVisible();
};

export const registerUser = async (page: Page, user: User) => {
  await gotoHome(page);
  await openSignupLogin(page);

  await page.locator('[data-qa="signup-name"]').fill(user.name);
  await page.locator('[data-qa="signup-email"]').fill(user.email);
  await page.locator('[data-qa="signup-button"]').click();

  await expect(page.getByText('Enter Account Information')).toBeVisible();

  await page.locator('#id_gender1').check();
  await page.locator('[data-qa="password"]').fill(user.password);
  await page.locator('[data-qa="days"]').selectOption('10');
  await page.locator('[data-qa="months"]').selectOption('5');
  await page.locator('[data-qa="years"]').selectOption('1995');

  await page.locator('[data-qa="first_name"]').fill(user.firstName);
  await page.locator('[data-qa="last_name"]').fill(user.lastName);
  await page.locator('[data-qa="company"]').fill(user.company);
  await page.locator('[data-qa="address"]').fill(user.address1);
  await page.locator('[data-qa="address2"]').fill(user.address2);
  await page.locator('[data-qa="country"]').selectOption({ label: user.country });
  await page.locator('[data-qa="state"]').fill(user.state);
  await page.locator('[data-qa="city"]').fill(user.city);
  await page.locator('[data-qa="zipcode"]').fill(user.zipcode);
  await page.locator('[data-qa="mobile_number"]').fill(user.mobileNumber);

  await page.locator('[data-qa="create-account"]').click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.locator('[data-qa="continue-button"]').click();

  await expect(page.locator('a').filter({ hasText: 'Logged in as' })).toContainText(user.name);
};

export const loginUser = async (page: Page, email: string, password: string) => {
  await gotoHome(page);
  await openSignupLogin(page);

  await page.locator('[data-qa="login-email"]').fill(email);
  await page.locator('[data-qa="login-password"]').fill(password);
  await page.locator('[data-qa="login-button"]').click();
};

export const logoutUser = async (page: Page) => {
  await page.getByRole('link', { name: /Logout/i }).click();
  await expect(page).toHaveURL(/\/login/);
};

export const deleteCurrentUser = async (page: Page) => {
  await page.getByRole('link', { name: /Delete Account/i }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.locator('[data-qa="continue-button"]').click();
};

export const addFirstProductFromProductsPage = async (page: Page) => {
  await page.getByRole('link', { name: /Products/i }).click();
  await expect(page).toHaveURL(/\/products/);

  const firstCard = page.locator('.features_items .product-image-wrapper').first();
  await firstCard.hover();
  await firstCard.locator('a:has-text("Add to cart")').first().click();
  await page.getByRole('link', { name: /View Cart/i }).click();
};

export const proceedCheckout = async (page: Page) => {
  await page.getByRole('link', { name: /Proceed To Checkout/i }).click();
};

export const payAndConfirm = async (page: Page) => {
  await page.locator('[data-qa="name-on-card"]').fill('Playwright Tester');
  await page.locator('[data-qa="card-number"]').fill('4242424242424242');
  await page.locator('[data-qa="cvc"]').fill('123');
  await page.locator('[data-qa="expiry-month"]').fill('12');
  await page.locator('[data-qa="expiry-year"]').fill('2030');

  await page.locator('[data-qa="pay-button"]').click();
};
