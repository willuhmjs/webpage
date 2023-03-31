import { expect, test } from '@playwright/test';

test('index page has expected header and navbar', async ({ page }) => {
	await page.goto('/');
	const navbar = page.getByRole('navigation');
	const header = page.getByRole('banner');
	await expect(header).toBeVisible();
	await expect(navbar).toBeVisible();
	await expect(navbar).toHaveText('willuhmjs   blog  about');
});
