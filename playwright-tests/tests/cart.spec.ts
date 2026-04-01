import { expect, test } from '@playwright/test';
import { addFirstProductFromProductsPage, deleteCurrentUser, gotoHome, loginUser, logoutUser, registerUser } from '../utils/app';
import { makeUser } from '../utils/test-data';

test.describe('Cart', () => {
  test('TC19 - Add Products to Cart', async ({ page }) => {
    await gotoHome(page);
    await addFirstProductFromProductsPage(page);

    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(1);
    await expect(page.locator('.cart_quantity')).toContainText('1');
  });

  test('TC20 - Verify Product Quantity', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /Products/i }).click();
    await page.locator('.features_items a:has-text("View Product")').first().click();

    await page.locator('#quantity').fill('4');
    await page.getByRole('button', { name: /Add to cart/i }).click();
    await page.getByRole('link', { name: /View Cart/i }).click();

    await expect(page.locator('.cart_quantity button')).toContainText('4');
  });

  test('TC21 - Remove Products', async ({ page }) => {
    await gotoHome(page);
    await addFirstProductFromProductsPage(page);

    await page.locator('.cart_quantity_delete').first().click();
    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(0);
  });

  test('TC22 - Search & Verify Cart Persistence', async ({ page }) => {
    const user = makeUser('tc22');
    await registerUser(page, user);
    await logoutUser(page);

    await page.getByRole('link', { name: /Products/i }).click();
    await page.locator('#search_product').fill('Dress');
    await page.locator('#submit_search').click();

    await page.locator('.features_items .product-image-wrapper').first().hover();
    await page.locator('.features_items .product-image-wrapper').first().locator('a:has-text("Add to cart")').first().click();
    await page.getByRole('link', { name: /View Cart/i }).click();
    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(1);

    await loginUser(page, user.email, user.password);
    await page.getByRole('link', { name: /Cart/i }).click();
    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(1);

    await deleteCurrentUser(page);
  });

  test('TC23 - Add to Cart from Brand', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /Polo/i }).click();

    const product = page.locator('.features_items .product-image-wrapper').first();
    await product.hover();
    await product.locator('a:has-text("Add to cart")').first().click();
    await page.getByRole('link', { name: /View Cart/i }).click();

    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(1);
  });
});
