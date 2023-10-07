# 🚀 ts-emoji 🚀

Impeccable TypeScript for the Expressive Developer

## 🎉 Revel in the Renaissance of Commenting 🎉

Behold! The monumental `ts-emoji`, an artisanal TypeScript preprocessor destined to intertwine the charm of emojis with the sturdiness of TypeScript directives.

The craftsmanship embedded within `ts-emoji` enables developers to adorn their codebase with an ensemble of playful and succinct emojis, which, behind the curtains, transmutes into genuine TypeScript directives during the compilation.

Imagine, dear reader, a world where your TypeScript artifacts not merely serve as the backbone of your logical operations but also cascade through the repository, whispering the subtle nuances of your code’s intentions via the gentle emotive embrace of emojis. A symphony of symbols and logic entwined together in a beautiful tapestry of code!

## ✨ Overview of Our Enchanting Journey ✨

Consider, for a moment, the mesmerizing dance of emojis and TypeScript, seamlessly intertwining to portray the esoteric intentions hidden beneath the code’s austere surface, unfolding thus:

```typescript
// 🙉
const x: any = 'The magic is invisible here';

// 🙈
// This enchanting block shall not summon TypeScript’s scrutiny
const y: string = 123;

// 📝 Ah, a future refinement awaits herein!
function add(a: number, b: number): number {
  return a + b;
}

// 👀 Unveil TypeScript’s gaze!
// 🙊 Anticipate an enchanting error below
const z: number = 'A number? Nay, a string!';
```

## 📘 Tome of Installation 📘

To commence, integrate this artisanal toolkit into your mystical codebase by invoking the following incantation within your terminal:

```shell
npm install ts-emoji --save-dev
```

## 🗝️ Unveiling the Enchantments: Usage 🗝️

### Preprocessing Your Script

Employ `ts-emoji` to gently caress your TypeScript, replacing the enchanting emojis with rigorous TypeScript directives:

```typescript
import { preprocessFile } from 'ts-emoji';

preprocessFile('./path-to-your/enchanting-script.ts');
```

### Enabling the Enchantments: Configuration

Include a preprocessor in your TypeScript or JavaScript workflow to summon `ts-emoji` prior to the traditional transpilation.

#### Example Configuration with Webpack

Using the `ts-loader` and its `getCustomTransformers` option, whisper `ts-emoji` into your build process:

```javascript
const { preprocessTs } = require('ts-emoji');

// webpack.config.js
module.exports = {
  // Your configurations dwell herein...
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: program => ({
            before: [preprocessTs(program)]
          })
        }
      }
    ]
  }
};
```

## 🌍 Universal Emojis to TypeScript Directives 🌍

Behold the default mappings, bridging the whimsical world of emojis and the steadfast reliability of TypeScript directives:

```json
{
  "🙉": "@ts-ignore",
  "🙈": "@ts-nocheck",
  "🙊": "@ts-expect-error",
  "👀": "@ts-check",
  // ...more of the enchanting mappings...
}
```

You may peruse [`emojis.json`](./src/emojis.json) within the library’s confines for the exhaustive list of mappings.

## 🛠️ Contribution & Enhancement 🛠️

Kindred spirits desiring to weave their own enchantments into `ts-emoji` are most welcome. Submit your pull requests and embroil yourself in the creation of an ever more enchanting toolkit for all!

### Running Tests

To ensure your magicks do not disturb the existing enchantments, invoke the test suite with:

```shell
npm test
```

## 📜 License 📜

Released under the [MIT License](LICENSE).

Embellish your TypeScript with the joys of emojis and embark upon a coding journey where logic and emotion dance together in a symphony of symbiotic harmony!

🚀 Happy Coding, Enchanting Developer! 🚀
