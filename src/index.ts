import { config } from "./config.js";

/** Показывает токен частично, чтобы не светить его в логах. */
function maskToken(token: string): string {
  if (token.length <= 8) return "<token>";
  return `${token.slice(0, 4)}...${token.slice(-4)}`;
}

console.log("VibeCourseSuperBot: конфигурация загружена ✓");
console.log(`BOT_TOKEN: ${maskToken(config.botToken)}`);
console.log(
  "Telegram-бот ещё не подключён — выберите библиотеку и добавьте код.",
);
