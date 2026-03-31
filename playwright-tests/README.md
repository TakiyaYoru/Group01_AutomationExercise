# Playwright Test Suite - Automation Exercise

## Cài đặt

1. Mở terminal tại thư mục `playwright-tests`
2. Chạy:
   - `npm install`
   - `npx playwright install`

## Chạy test

- Chạy toàn bộ: `npm test`
- Chạy Authentication: `npm run test:auth`
- Chạy Products: `npm run test:products`
- Chạy Cart: `npm run test:cart`
- Chạy Checkout: `npm run test:checkout`
- Chạy có UI mode: `npm run test:ui`
- Xem report: `npm run report`

## Mapping test cases

- `tests/auth.spec.ts`: TC01 -> TC08
- `tests/products.spec.ts`: TC09 -> TC18
- `tests/cart.spec.ts`: TC19 -> TC23
- `tests/checkout.spec.ts`: TC24 -> TC30
