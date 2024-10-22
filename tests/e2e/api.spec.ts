import { test, expect } from '@playwright/test';

test.describe('Api Country', () => {
  test('should display flag image', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const images = await page.locator('img[alt="flag"]');
    await expect(images.first()).toHaveAttribute(
      'src',
      expect.stringContaining('flagcdn.com')
    );
  });
});
