# keepalive

Simple Node.js library to ping a URL at a fixed interval.

## Install

```bash
npm i @codeguyakash/keepalive
```

## Usage

```js
import { ping } from '@codeguyakash/keepalive';

ping(60000, 'https://your-url.com'); // ping every 60 seconds
```

## API

`ping(intervalMs, url, timeoutMs?)`

- `intervalMs` — interval in milliseconds
- `url` — target URL
- `timeoutMs` _(optional)_ — request timeout in milliseconds (default: 10000)

---

For further issues, you can ping me on [x.com/codeguyakash](https://x.com/codeguyakash)

---

Do you want me to also make a **TypeScript `.d.ts` file** so this package has autocompletion? That’ll make it even easier for users.
