const { test, expect } = require('@playwright/test');

test.describe('Projects page', () => {
  test('renders Work / Student work sections and four cards', async ({ page }) => {
    await page.goto('/projects/', { waitUntil: 'domcontentloaded' });

    await expect(page.getByRole('heading', { level: 1, name: 'selected work' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Work' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Student work' })).toBeVisible();

    await expect(page.locator('.projects .grid-item .project-card-shell')).toHaveCount(4);
    await expect(page.locator('.projects .grid-item a.project-card-main')).toHaveCount(4);
  });

  test('tag filter All leaves four grid items visible', async ({ page }) => {
    await page.goto('/projects/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'All', exact: true }).click();
    const items = page.locator('.projects .grid-item');
    await expect(items).toHaveCount(4);
  });
});
