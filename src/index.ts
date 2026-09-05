import { config } from "./config.js";

// Базовый адрес Bot API с нашим токеном
const api = `https://api.telegram.org/bot${config.botToken}`;

// Номер последнего обработанного обновления (чтобы не читать старые снова)
let offset = 0;

while (true) {
  // Ждём новое сообщение до 30 секунд (long polling)
  const response = await fetch(
    `${api}/getUpdates?offset=${offset + 1}&timeout=30&allowed_updates=["message"]`,
  );
  const data: any = await response.json();

  if (!data.ok) {
    // ok: false — Telegram вернул ошибку (неверный токен, лимит запросов и т.п.).
    // Логируем проблему и сразу переходим к следующей попытке получить обновления.
    console.error("Ошибка Bot API, пробуем снова");
    continue;
  }

  // Печатаем текст каждого нового сообщения
  for (const update of data.result ?? []) {
    offset = update.update_id;
    const text = update.message?.text;
    if (text) console.log(`Сообщение: ${text}`);
  }
}

