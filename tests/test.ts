import { expect, test } from '@playwright/test';

const pages = ['/', '/about'];
test('each main page has expected header and footer', async ({ page }) => {
	for (const pagePath of pages) {
		await page.goto(pagePath);

		// header
		const header = page.getByRole('banner');
		const navbar = page.getByRole('navigation');
		await expect(header).toBeVisible();
		await expect(navbar).toBeVisible();
		await expect(navbar).toHaveText('willuhmjs   blog  about');

		// footer
		const footer = page.getByRole('contentinfo');
		await expect(footer).toBeVisible();
		await expect(footer).toHaveText('fix typo willuhmjs');
	}
});
