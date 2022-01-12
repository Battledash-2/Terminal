# Terminal.js

`Terminal.js`: The best terminal colorizer.
`terminal.js` is able to make the terminal have any color you want! Even custom RGB colors if you're feeling like it!

# Usage:

### First, require it.
```js
require("terminalcolors.js");

console.log("hello".green());
```

## Note: If you want to use multiple styles, you must use the following syntax:
```js
const color = require("terminalcolors.js");

console.log(color.bold("hello".blue()));
```

# **IMPORTANT** If you are using an older version of node, the `"string".blue()` syntax might work. If so, try the following instead:
```js
const color = require("terminalcolors.js");

console.log(color.blue("string"))'
```

## The export will look like this: (for reference)
```js
{
    full: {
        ...basic,
        font: fonts,
        reset,
        ...foreground,
        background,
        highIntensity: {
            ...foreground_high_intensity,
            background: background_high_intensity
        }
    }
}
```

# For a full list of options, check `list.js`