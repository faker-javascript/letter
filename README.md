<h1 align="center">Letter</h1>
<p align="center">
Letter package provides functionality to generate a fake letter value.
</p>

<p align="center">
<a href="https://github.com/faker-javascript/letter/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/letter.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/letter"> <a href="https://github.com/faker-javascript/letter"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/faker-javascript/letter/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @fakerjs/letter
```

## Usage

```js
import fakeLetter from '@fakerjs/letter';

fakeLetter();
//=> z

fakeLetter({'casing': 'upper'});
//=> Z

fakeLetter({'casing': 'upper', 'locale': 'ru_RU'});
//=> Я
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/letter/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
