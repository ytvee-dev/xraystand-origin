# Деплой на Cloudflare Pages для xraystand.com

## Быстрый старт

1. Подключите репозиторий к Cloudflare Pages
2. Настройте Build Settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
3. Добавьте кастомный домен `xraystand.com` в настройках
4. Деплой автоматически запустится при push в main

## Файлы конфигурации

- `_redirects` - редиректы для SPA
- `_headers` - HTTP заголовки для кэширования и безопасности
- `wrangler.toml` - конфигурация Cloudflare Workers/Pages

## Команды

```bash
# Локальная разработка
npm run dev

# Сборка проекта
npm run build

# Предварительный просмотр сборки
npm run preview
```

## Особенности

- Автоматический деплой при изменениях в main ветке
- CDN от Cloudflare для быстрой загрузки
- HTTPS по умолчанию
- Кастомный домен с SSL сертификатом
