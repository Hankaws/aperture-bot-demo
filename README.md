# aperture-bot-demo

A tiny product price list, used to demo [Aperture Bot](https://github.com/Hankaws/aperture-bot).

Prices are stored in cents, and `formatPrice` currently shows them as raw cents. Ask the bot on an issue:

```
/aperture Show prices in dollars, with two decimals
```

It plans the change, runs Aperture Agent Check (parse, imports, types, tests), and opens a pull request only when nothing is red.

```
npm ci
npm test
npm run typecheck
```
