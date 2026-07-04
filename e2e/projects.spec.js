const { test, expect } = require('@playwright/test');

const CARD_COUNT = 11;

test.describe('Projects page', () => {
  test('renders a single grid with all cards and no category sections', async ({ page }) => {
    await page.goto('/projects/', { waitUntil: 'domcontentloaded' });

    await expect(page.getByRole('heading', { level: 2, name: 'Work' })).toHaveCount(0);
    await expect(page.getByRole('heading', { level: 2, name: 'Student work' })).toHaveCount(0);

    await expect(page.locator('.projects .grid-item .project-card-shell')).toHaveCount(CARD_COUNT);
    await expect(page.locator('.projects .grid-item a.project-card-main')).toHaveCount(CARD_COUNT);
  });

  test('tag filter All leaves all grid items visible', async ({ page }) => {
    await page.goto('/projects/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'All', exact: true }).click();
    const items = page.locator('.projects .grid-item');
    await expect(items).toHaveCount(CARD_COUNT);
  });

  test('Software Eng filter shows only Grove', async ({ page }) => {
    await page.goto('/projects/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Software Eng', exact: true }).click();
    const visible = page.locator('.projects .grid-item:visible');
    await expect(visible).toHaveCount(1);
    await expect(visible.first()).toContainText('Grove');
  });
});
