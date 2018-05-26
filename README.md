# VAMTIGER Bash
[VAMTIGER Get HTML Title](https://github.com/vamtiger-project/vamtiger-get-html-title) will return the title for defined HTML document text

## Installation
[VAMTIGER Get HTML Title](https://github.com/vamtiger-project/vamtiger-get-html-title) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-html-title
```
or
```bash
yarn add vamtiger-get-html-title
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get HTML Title](https://github.com/vamtiger-project/vamtiger-get-html-title):
```javascript
import getHtmlTitle from 'vamtiger-get-html-title';
```
or
```javascript
const getHtmlTitle = require('vamtiger-get-html-title').default;
```

[VAMTIGER Get HTML Title](https://github.com/vamtiger-project/vamtiger-get-html-title) can then be used to test whether a defined input string contains a _HTML_ **Title**:
```javascript
const getHtmlTitle = require('vamtiger-get-html-title').default

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>
`;
const title = getHtmlTitle({ html }); // 'Some HTML Title'
```
