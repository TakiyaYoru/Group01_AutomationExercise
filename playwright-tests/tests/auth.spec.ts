import { expect, test } from '@playwright/test';
import { deleteCurrentUser, gotoHome, loginUser, logoutUser, openSignupLogin, registerUser } from '../utils/app';
import { makeUser } from '../utils/test-data';
import {
  authDeleteCases,
  authIncorrectLoginCases,
  authLoginStateCases,
  authRegisterExistingCases,
  authRegisterSuccessCases,
  authSignupMissingCases,
  authValidLoginCases,
  authEmptyLoginCases,
} from './data/auth.data';

test.describe('Authentication', () => {
  for (const c of authRegisterSuccessCases) {
    test(c.title, async ({ page }) => {
      const user = makeUser(c.prefix);
      await registerUser(page, user);
      await deleteCurrentUser(page);
    });
  }

  for (const c of authValidLoginCases) {
    test(c.title, async ({ page }) => {
      const user = makeUser(c.prefix);
      await registerUser(page, user);
      await logoutUser(page);

      await loginUser(page, user.email, user.password);
      await expect(page.locator('a').filter({ hasText: 'Logged in as' })).toContainText(user.name);

      await deleteCurrentUser(page);
    });
  }

  for (const c of authIncorrectLoginCases) {
    test(c.title, async ({ page }) => {
      await gotoHome(page);
      await openSignupLogin(page);

      await page.locator('[data-qa="login-email"]').fill(c.email);
      await page.locator('[data-qa="login-password"]').fill(c.password);
      await page.locator('[data-qa="login-button"]').click();

      await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
    });
  }

  for (const c of authRegisterExistingCases) {
    test(c.title, async ({ page }) => {
      const user = makeUser(c.prefix);
      await registerUser(page, user);
      await logoutUser(page);

      await openSignupLogin(page);
      await page.locator('[data-qa="signup-name"]').fill(c.reSignupName);
      await page.locator('[data-qa="signup-email"]').fill(user.email);
      await page.locator('[data-qa="signup-button"]').click();

      await expect(page.getByText('Email Address already exist!')).toBeVisible();

      await loginUser(page, user.email, user.password);
      await deleteCurrentUser(page);
    });
  }

  for (const c of authDeleteCases) {
    test(c.title, async ({ page }) => {
      const user = makeUser(c.prefix);
      await registerUser(page, user);
      await deleteCurrentUser(page);
    });
  }

  for (const c of authEmptyLoginCases) {
    test(c.title, async ({ page }) => {
      await gotoHome(page);
      await openSignupLogin(page);

      const loginEmail = page.locator('[data-qa="login-email"]');
      await page.locator('[data-qa="login-button"]').click();

      const validationMessage = await loginEmail.evaluate((el: HTMLInputElement) => el.validationMessage);
      expect(validationMessage.length).toBeGreaterThan(0);
    });
  }

  for (const c of authSignupMissingCases) {
    test(c.title, async ({ page }) => {
      const user = makeUser(c.prefix);
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
  }

  for (const c of authLoginStateCases) {
    test(c.title, async ({ page }) => {
      const user = makeUser(c.prefix);
      await registerUser(page, user);

      const loggedInLabel = page.locator('a').filter({ hasText: 'Logged in as' });
      await expect(loggedInLabel).toContainText(user.name);

      await page.getByRole('link', { name: /Products/i }).click();
      await expect(loggedInLabel).toContainText(user.name);

      await page.getByRole('link', { name: /^Home$/i }).click();
      await expect(loggedInLabel).toContainText(user.name);

      await deleteCurrentUser(page);
    });
  }
});
