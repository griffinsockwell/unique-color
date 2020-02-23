This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Installation

Install with npm

```bash
npm install unique-color
```

Install with yarn

```bash
yarn add unique-color
```

## Usage

```js
const { getHSL, getRGB } = require('unique-color');

// You must provide a "for" value
console.log(getHSL({ for: 'new-string' }));
// {
//   color: 'hsla(56, 87%, 85%, 1)',
//   hue: 56,
//   saturation: 87,
//   lightness: 85,
//   alpha: 1
// }

// Overriding the random "saturation" value
console.log(getHSL({ for: 'new-string', saturation: 100 }));
// {
//   color: 'hsla(56, 100%, 85%, 1)',
//   hue: 56,
//   saturation: 100,
//   lightness: 85,
//   alpha: 1
// }

// You must provide a "for" value
console.log(getRGB({ for: 'another-string' }));
// {
//   color: 'rgba(214, 205, 208, 1)',
//   red: 214,
//   green: 205,
//   blue: 208,
//   alpha: 1
// }

// Overriding the random "blue" value
console.log(getRGB({ for: 'another-string', blue: 255 }));
// {
//   color: 'rgba(214, 205, 255, 1)',
//   red: 214,
//   green: 205,
//   blue: 255,
//   alpha: 1
// }
```

### Example in React Application

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { getHSL } from 'unique-color';

const data = [
  { id: 'ck6y9fan50000h5xye3n8hunf', title: 'Item one' },
  { id: 'ck6y9fan50001h5xy43lw1lba', title: 'Item two' },
  { id: 'ck6y9fan50002h5xyd06rdwoq', title: 'Item three' },
];

function App() {
  return (
    <ul>
      {data.map(item => {
        const { color } = getHSL({ for: item.id });
        const itemStyles = {
          border: `10px solid ${color}`,
          margin: 10,
          padding: 10,
        };
        return (
          <li key={item.id} style={itemStyles}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
