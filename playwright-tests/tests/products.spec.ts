import { expect, test } from '@playwright/test';
import { gotoHome } from '../utils/app';

test.describe('Products', () => {
  test('TC09 - Verify All Products & Detail', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /Products/i }).click();

    await page.locator('.features_items a:has-text("View Product")').first().click();
    await expect(page).toHaveURL(/\/product_details\//);

    await expect(page.locator('.product-information h2')).toBeVisible();
    await expect(page.locator('.product-information')).toContainText('Rs.');
    await expect(page.locator('.product-information')).toContainText('Category');
    await expect(page.locator('.product-information')).toContainText('Availability');
    await expect(page.locator('.product-information')).toContainText('Condition');
    await expect(page.locator('.product-information')).toContainText('Brand');
  });

  test('TC10 - Search Product (Positive)', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /Products/i }).click();

    await page.locator('#search_product').fill('Dress');
    await page.locator('#submit_search').click();

    const productNames = page.locator('.features_items .productinfo p');
    const total = await productNames.count();
    expect(total).toBeGreaterThan(0);

    for (let i = 0; i < total; i += 1) {
      await expect(productNames.nth(i)).toContainText(/dress/i);
    }
  });

  test('TC11 - Search Product (Negative)', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /Products/i }).click();

    await page.locator('#search_product').fill('TakiUmt123');
    await page.locator('#submit_search').click();

    await expect(page.locator('.features_items .productinfo p')).toHaveCount(0);
  });

  test('TC12 - Add Review on Product', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /Products/i }).click();
    await page.locator('.features_items a:has-text("View Product")').first().click();

    await page.locator('#name').fill('Playwright User');
    await page.locator('#email').fill('playwright.review@mailinator.com');
    await page.locator('#review').fill('Great product, review submitted by Playwright.');
    await page.getByRole('button', { name: /Submit/i }).click();

    await expect(page.getByText('Thank you for your review.')).toBeVisible();
  });

  test('TC13 - Add from Recommended Items', async ({ page }) => {
    await gotoHome(page);

    await page.locator('.recommended_items').scrollIntoViewIfNeeded();
    const recommended = page.locator('.recommended_items .product-image-wrapper').first();
    await recommended.locator('a:has-text("Add to cart")').click();
    await page.getByRole('link', { name: /View Cart/i }).click();

    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(1);
  });

  test('TC14 - View Category (Women)', async ({ page }) => {
    await gotoHome(page);
    await page.locator('a[href="#Women"]').click();
    await page.locator('a[href="/category_products/1"]').click();

    await expect(page.locator('.title.text-center')).toContainText('WOMEN - DRESS PRODUCTS');
  });

  test('TC15 - View Category (Men)', async ({ page }) => {
    await gotoHome(page);
    await page.locator('a[href="#Men"]').click();
    await page.locator('a[href="/category_products/3"]').click();

    await expect(page.locator('.title.text-center')).toContainText('MEN - TSHIRTS PRODUCTS');
  });

  test('TC16 - View Category (Kids)', async ({ page }) => {
    await gotoHome(page);
    await page.locator('a[href="#Kids"]').click();
    await page.locator('a[href="/category_products/4"]').click();

    await expect(page.locator('.title.text-center')).toContainText('KIDS - DRESS PRODUCTS');
  });

  test('TC17 - View Brand (Polo)', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /Polo/i }).click();

    await expect(page.locator('.title.text-center')).toContainText('BRAND - POLO PRODUCTS');
    await expect(page.locator('.features_items .product-image-wrapper').first()).toBeVisible();
  });

  test('TC18 - View Brand (H&M)', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('link', { name: /H&M/i }).click();

    await expect(page.locator('.title.text-center')).toContainText('BRAND - H&M PRODUCTS');
    await expect(page.locator('.features_items .product-image-wrapper').first()).toBeVisible();
  });
});
