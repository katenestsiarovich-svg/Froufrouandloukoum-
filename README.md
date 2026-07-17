# froufrou and loukoum — сайт

Статический сайт. Хостинг бесплатный, платежи через Stripe.

## Файлы

```
index.html      вёрстка (трогать не надо)
shop.js         логика корзины (трогать не надо)
products.js     ← твои вещи. Только этот файл редактируешь
images/         ← фотографии
```

---

## 1. Хостинг — Cloudflare Pages (бесплатно, навсегда)

Выбрал Cloudflare, а не GitHub Pages: серверы в Европе (быстрее для польских
покупателей), бесплатный HTTPS, свой домен без доплат, нет лимита трафика.

1. Создай аккаунт на github.com, если ещё нет.
2. Новый репозиторий → назови `froufrouandloukoum` → Public.
3. Загрузи туда все файлы из этой папки (Add file → Upload files).
4. Зарегистрируйся на dash.cloudflare.com.
5. Workers & Pages → Create → Pages → Connect to Git → выбери репозиторий.
6. Build command оставь **пустым**. Output directory: `/`
7. Save and Deploy.

Через минуту сайт живёт на `froufrouandloukoum.pages.dev`.

**Свой домен:** купи `froufrouandloukoum.com` (~60 zł/год, OVH или Cloudflare
Registrar — второй продаёт по себестоимости). В Pages → Custom domains → добавь.

Обновление сайта: меняешь файл на GitHub → Cloudflare сам пересобирает.

---

## 2. Платежи — Stripe

Почему Stripe, а не Przelewy24/PayU: нет абонплаты и нет договора с
подписанием — регистрация за вечер. Комиссия для европейских карт
**1,5% + 1 zł**, это дешевле PayU. BLIK поддерживается.

### Настройка

1. Регистрация на stripe.com → выбери Poland → введи данные (нужен NIP,
   если есть JDG; можно и как физлицо на старте).
2. Settings → Payment methods → включи **BLIK**, **Card**, **Przelewy24**.
   Это то, чем платят в Польше.
3. Product catalogue → Add product:
   - Name: название вещи (как в `products.js`)
   - Price: цена в EUR
   - Save
4. У товара → Create payment link → скопируй ссылку
   (вид: `https://buy.stripe.com/xxxxx`)
5. В `products.js` вставь её в поле `stripe`:

```js
stripe: "https://buy.stripe.com/xxxxx"
```

### В Payment Link включи (Advanced options):
- **Collect shipping address** — иначе не будешь знать, куда шить и слать
- **Custom field** → «Мерки / рост» — для made-to-order это важнее размера
- Limit quantity: 1 per customer

### Пока ссылок нет

Сайт работает и без Stripe. Если у вещи `stripe: ""`, кнопка Checkout
открывает письмо с составом заказа — выставляешь счёт вручную.
Для made-to-order это нормальный старт: успеваешь подтвердить сроки
пошива до того, как взял деньги.

**Важно:** если в корзине больше одной вещи, заказ всегда уходит письмом —
Payment Links умеют только по одной позиции. Когда объёмы вырастут, это
место переделывается на Stripe Checkout (нужна будет одна функция на
Cloudflare Workers, тоже бесплатно).

---

## 3. Добавить вещь

Открой `products.js`, скопируй блок, поменяй значения:

```js
{
  id: "linen-shirt-ecru",              // латиницей, без пробелов, уникально
  name: "Linen Shirt in Ecru",
  category: "dresses",                 // dresses или jackets
  price: 890,                          // в евро, без символа
  year: "AW26",
  origin: "Warsaw",
  images: ["shirt-1.jpg", "shirt-2.jpg"],  // первое = в витрине
  sizes: ["XS", "S", "M", "L", "XL"],
  description: "...",
  composition: "...",
  sizing: "...",
  stripe: ""
},
```

Запятая между блоками обязательна, после последнего — не нужна.

## 4. Фотографии

- Клади в `images/`
- Пропорции **3:4** (вертикальные), например 1200×1600
- Формат `.webp` или `.jpg`, вес до 300 KB
- Фон однотонный светлый — как на референсах

## 5. Категории

Сейчас dresses и jackets. Чтобы добавить третью — в `index.html` найди
блок `<div class="filters">` и допиши кнопку по образцу, потом такую же
строку в меню (`<div class="menu">`).

## Что поменять перед запуском

- `hello@froufrouandloukoum.com` → твоя почта (в `shop.js`, вверху,
  и внизу `index.html`)
- Тексты в `index.html`: «Garments kept like documents», блок «On the work»
- Реальные фото вместо кампании-заглушки в карточках
