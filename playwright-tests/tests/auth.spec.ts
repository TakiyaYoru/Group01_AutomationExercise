import { expect, test } from '@playwright/test';
import { deleteCurrentUser, gotoHome, loginUser, logoutUser, openSignupLogin, registerUser } from '../utils/app';
import { makeUser } from '../utils/test-data';

test.describe('Authentication', () => {
  test('TC01 - Register User (Success)', async ({ page }) => {
    const user = makeUser('tc01');
    await registerUser(page, user);
    await deleteCurrentUser(page);
  });

  test('TC02 - Login User (Correct)', async ({ page }) => {
    const user = makeUser('tc02');
    await registerUser(page, user);
    await logoutUser(page);

    await loginUser(page, user.email, user.password);
    await expect(page.locator('a').filter({ hasText: 'Logged in as' })).toContainText(user.name);

    await deleteCurrentUser(page);
  });

  test('TC03 - Login User (Incorrect)', async ({ page }) => {
    await gotoHome(page);
    await openSignupLogin(page);

    await page.locator('[data-qa="login-email"]').fill('wrong_user@mailinator.com');
    await page.locator('[data-qa="login-password"]').fill('wrongPassword123');
    await page.locator('[data-qa="login-button"]').click();

    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
  });

  test('TC04 - Register (Existing Email)', async ({ page }) => {
    const user = makeUser('tc04');
    await registerUser(page, user);
    await logoutUser(page);

    await openSignupLogin(page);
    await page.locator('[data-qa="signup-name"]').fill('Another Name');
    await page.locator('[data-qa="signup-email"]').fill(user.email);
    await page.locator('[data-qa="signup-button"]').click();

    await expect(page.getByText('Email Address already exist!')).toBeVisible();

    await loginUser(page, user.email, user.password);
    await deleteCurrentUser(page);
  });

  test('TC05 - Delete Account', async ({ page }) => {
    const user = makeUser('tc05');
    await registerUser(page, user);
    await deleteCurrentUser(page);
  });

  test('TC06 - Login with Empty Fields', async ({ page }) => {
    await gotoHome(page);
    await openSignupLogin(page);

    const loginEmail = page.locator('[data-qa="login-email"]');
    await page.locator('[data-qa="login-button"]').click();

    const validationMessage = await loginEmail.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage.length).toBeGreaterThan(0);
  });

  test('TC07 - Signup Missing Required Info', async ({ page }) => {
    const user = makeUser('tc07');
    await gotoHome(page);
    await openSignupLogin(page);

    await page.locator('[data-qa="signup-name"]').fill(user.name);
    await page.locator('[data-qa="signup-email"]').fill(user.email);
    await page.locator('[data-qa="signup-button"]').click();

    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await page.locator('[data-qa="create-account"]').click();

    const passwordInput = page.locator('[data-qa="password"]');
    const validationMessage = await passwordInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage.length).toBeGreaterThan(0);
  });

  test('TC08 - Verify Login State After Signup', async ({ page }) => {
    const user = makeUser('tc08');
    await registerUser(page, user);

    const loggedInLabel = page.locator('a').filter({ hasText: 'Logged in as' });
    await expect(loggedInLabel).toContainText(user.name);

    await page.getByRole('link', { name: /Products/i }).click();
    await expect(loggedInLabel).toContainText(user.name);

    await page.getByRole('link', { name: /^Home$/i }).click();
    await expect(loggedInLabel).toContainText(user.name);

    await deleteCurrentUser(page);
  });
});
