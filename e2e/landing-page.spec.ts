import { test, expect } from '@playwright/test';

test('should display the main heading on the landing page', async ({
  page,
}) => {
  await page.goto('/');

  // Procura por um elemento h1 que contenha o texto "Hello World"
  // e verifica se ele está visível na página.
  await expect(
    page.getByRole('heading', { name: 'Hello World' }),
  ).toBeVisible();
});
