// tests/smoke-basic.spec.ts - TESTES MAIS SIMPLES
import { test, expect } from "@playwright/test";

test("deve carregar página inicial com elementos básicos", async ({ page }) => {
  await page.goto("/");

  // Verificar elementos que SEMPRE devem estar presentes
  await expect(page.locator('h1:has-text("Find People")')).toBeVisible();
  await expect(
    page.locator('input[placeholder*="nome, sobrenome ou idade"]')
  ).toBeVisible();
  await expect(page.locator(".theme-toggle")).toBeVisible();

  // Verificar que não está em estado de erro
  await expect(
    page.locator("text=Erro ao carregar usuários")
  ).not.toBeVisible();
});

test("deve permitir digitar na busca", async ({ page }) => {
  await page.goto("/");

  const searchInput = page.locator(
    'input[placeholder*="nome, sobrenome ou idade"]'
  );
  await searchInput.fill("Teste");
  await expect(searchInput).toHaveValue("Teste");
});

test("deve alternar tema com sucesso", async ({ page }) => {
  await page.goto("/");

  const html = page.locator("html");
  const initialTheme = await html.getAttribute("data-theme");

  await page.click(".theme-toggle");
  await page.waitForTimeout(1000);

  const newTheme = await html.getAttribute("data-theme");
  expect(newTheme).not.toBe(initialTheme);
});
