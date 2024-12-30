# Test Driven Development with Jest

## Installation

`pnpm install`

## Setup Steps

```
pnpm add --save-dev jest
pnpm create jest@latest
pnpm add --save-dev babel-jest @babel/core @babel/preset-env
```

Add the following to `package.json`:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

Create and add the following to `babel.config.js`:

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Usage

Create tests

For example, if testing `sum.js`, name the test file `sum.test.js`.
