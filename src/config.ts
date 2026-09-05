function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(
      [
        `Переменная окружения ${name} не задана.`,
        "Добавьте её в файл .env (шаблон: .env.example) и перезапустите.",
      ].join("\n"),
    );
  }
  return value;
}

/**
 * Конфигурация приложения.
 * Файл .env загружается автоматически npm-скриптами (см. package.json).
 */
export const config = {
  botToken: requireEnv("BOT_TOKEN"),
} as const;
