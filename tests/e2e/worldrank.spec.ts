import { test, expect } from '@playwright/test';

test.describe('Search functionality', () => {
  test('should filter countries by name', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const input = await page.getByPlaceholder(
      'Search by Name, Region, Subregion'
    );
    await input.fill('South Georgia');

    await page.waitForTimeout(1000);

    const result = await page.locator('text=South Georgia');
    await expect(result).toBeVisible();
  });
});

test.describe('DropList sorting functionality', () => {
  test('should sort countries by selected option', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const dropListButton = page.locator('button', { hasText: 'Population' });
    await dropListButton.click();

    const areaOption = page.locator('text=Area (km²)');
    await areaOption.click();

    const firstCountryArea = await page
      .locator('tr:nth-child(2) td:nth-child(4)')
      .textContent();
    const secondCountryArea = await page
      .locator('tr:nth-child(3) td:nth-child(4)')
      .textContent();

    expect(Number(firstCountryArea)).toBeLessThanOrEqual(
      Number(secondCountryArea)
    );
  });
});

test.describe('Region Tab functionality', () => {
  test('should update table when a region tab is clicked', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const americasTab = page.locator('button', { hasText: 'Americas' });
    await americasTab.click();

    await page.waitForTimeout(1000);

    const firstCountryRegion = await page
      .locator('tr:nth-child(2) td:last-child')
      .textContent();
    expect(firstCountryRegion).toBe('Americas');

    const secondCountryRegion = await page
      .locator('tr:nth-child(3) td:last-child')
      .textContent();
    expect(secondCountryRegion).toBe('Americas');
  });
});

const independentCountries = [
  'Vatican City',
  'Nauru',
  'Tuvalu',
  'Palau',
  'San Marino',
  'Liechtenstein',
  'Monaco',
  'Saint Kitts and Nevis',
  'Marshall Islands',
  'Dominica',
];

test.describe('Checkbox filtering functionality', () => {
  test('should filter the table when Independent is checked', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000');

    const independentCheckbox = page.locator('label', {
      hasText: 'Independent',
    });
    await independentCheckbox.click();

    await page.waitForTimeout(1000);

    const countryNames = await page
      .locator('tr td:nth-child(2)')
      .allTextContents();

    for (const name of countryNames) {
      expect(independentCountries).toContain(name);
    }
  });
});

test.describe('Country table navigation', () => {
  test('should navigate to country page when a flag is clicked', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000'); // URL của trang mà bạn muốn kiểm thử

    const countryLink = page.locator('tr td:first-child a');

    await countryLink.first().click();

    await page.waitForURL(/\/country\?id=/);

    expect(page.url()).toMatch(/\/country\?id=/);
  });
});
