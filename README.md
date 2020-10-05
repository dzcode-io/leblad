# Le'Blad

[<img src="https://img.shields.io/badge/Join%20us%20on%20Slack-@dzCode.io-yellow.svg?logo=slack">](https://join.slack.com/t/dzcode/shared_invite/zt-ek9kscb7-m8z_~cBjX79l~uchuABPFQ) [![npm](https://img.shields.io/npm/v/@dzcode-io/leblad)](https://www.npmjs.com/package/@dzcode-io/leblad) [![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/) [![codecov](https://codecov.io/gh/dzcode-io/leblad/branches/branch/develop/graph/badge.svg)](https://codecov.io/gh/dzcode-io/leblad/branches) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fdzcode-io%2Fleblad%2Fdevelop)](https://dashboard.stryker-mutator.io/reports/github.com/dzcode-io/leblad/develop) [![Known Vulnerabilities](https://snyk.io/test/github/dzcode-io/leblad/badge.svg)](https://snyk.io/test/github/dzcode-io/leblad)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

A library providing a list of Algerian administrative areas with many useful APIs.

## Getting started

### Usage

### Installation

```
npm install @dzcode-io/leblad --save
```

## API

#### getWilayaList(projection?: string[])

Returns a list of Algerian provinces (Wilayas)

**Arguments**

- `projection: string[]` (optional) Array of Wilaya Object attributes to keep.

**Examples**

```javascript
const { getWilayaList, getWilayaByZipCode } = require('@dzcode-io/leblad');

const allWilayasDetails = getWilayaList();

// if we only want the wilaya names for example:
const wilayasNames = getWilayaList(['name', 'name_ar', 'name_en']);
```

#### getWilayaByZipCode(zipCode: number, projection?: string[])

Returns a wilaya that includes the given zipCode.

**Arguments**

- `zipCode: number` (**required**) A zip code
- `projection: string[]` (optional) Array of Wilaya Object attributes to keep

**Examples**

```javascript
const { getWilayaByZipCode } = require('@dzcode-io/leblad');

// To get the wilaya that includes the zip code 1000, We can use getWilayaByZipCode
// This example will return Adrar { name: "Adrar", ...}
const wilaya = getWilayaByZipCode(1000);

// We can also select only attributes that we want, For example select name and mattricule:
const wilayaAttributes = getWilayaByZipCode(1000, ['name', 'mattricule']);
```

#### getWilayaByCode(wilayaCode: number, projection?: string[])

Takes a wilaya code (matricule) and returns the matching wilaya

**Arguments**

- `wilayaCode: number` (**required**) the Wilaya's "matricule"
- `projection: string[]` (optional) Array of Wilaya Object attributes

**Examples**

```javascript
const { getWilayaByCode } = require('@dzcode-io/leblad');

console.log(getWilayaByCode(31)); // will print the wilaya object ({name: "Oran"...})
```

##### getAdjacentWilayas(wilayaCode: number)

Takes a wilaya code (matricule) and returns a list of adjacent wilayas codes

**Arguments**

- `wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getAdjacentWilayas } = require('@dzcode-io/leblad');

console.log(getAdjacentWilayas(31)); // will print [46, 22, 29, 27]
```

#### getZipCodesForWilaya(wilayaCode: number)

Takes a wilaya code (matricule) and returns a list of Respective Zip-Codes for that wilaya

**Arguments**

- `wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getZipCodesForWilaya } = require('@dzcode-io/leblad');

console.log(getZipCodesForWilaya(31)); //returns list of zip codes for wilaya 31
```

#### getDairatsForWilaya(wilayaCode: number, projection?: string[])

Takes a wilaya code (matricule) ans returns list of all dairats of that wilaya.

**Arguments**

- `wilayaCode: number` (**required**) the Wilaya's "matricule"
- `projection: string[]` (optional) Array of Wilaya Object attributes to keep

**Examples**

```javascript
const { getDairatsForWilaya } = require('@dzcode-io/leblad');

console.log(getDairatsForWilaya(3)); //returns list of dairats for wilaya 3
```

#### getWilayaByPhoneCode(phoneCode: number, projection?: string[])

Takes a phone code and returns the matching wilaya.

**Arguments**

- `phoneCode: number|string` (**required**) the Wilaya's "phoneCode" or the full phone number
- `projection: string[]` (optional) Array of Wilaya Object attributes to keep

**Examples**

```javascript
const { getWilayaByPhoneCode } = require('@dzcode-io/leblad');

console.log(getWilayaByPhoneCode(34)); //will the print wilaya object ({name: "Béjaïa"...})
```

#### getWilayaByDairaName(dairaName: String, projection?: string[])

Takes a daira name and returns the matching wilaya.

**Arguments**

- `dairaName: string` (**required**) the Wilaya's "dairaName" in en|fr|ar
- `projection: string[]` (optional) Array of Wilaya Object attributes to keep

**Examples**

```javascript
const { getWilayaByDairaName } = require('@dzcode-io/leblad');

console.log(getWilayaByDairaName("OUED RHIOU")); // will print the wilaya object ({name: "Relizane"...})
```

#### getPhoneCodesForWilaya(wilayaCode: number)

Takes a wilaya code (matricule) and returns a list of phone codes for given wilaya

**Arguments**

- `wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getPhoneCodesForWilaya } = require('@dzcode-io/leblad');

console.log(getPhoneCodesForWilaya(31)); //returns list of phone codes for wilaya 31
```

#### getPhoneCodeForWilaya(wilayaCode: number)

Takes a wilaya code (matricule) and returns the first phone code from a list of phone codes for given wilaya

**Arguments**

- `wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getPhoneCodeForWilaya } = require('@dzcode-io/leblad');

console.log(getPhoneCodeForWilaya(16)); //returns first phone code for wilaya 16
```

## Helper methods

#### wilayaProjection(wilaya: (object|array), projection?: string[])

Return an object or an array of object with only wilaya attribute you select in the `projection` attributes array.

**Arguments**

- `wilaya: (object|array)` (**required**) A wilaya object or an array of wilaya objects
- `projection: string[]` (optional) Array of Wilaya Object attributes

**Examples**

```javascript
const { projectWilaya } = require('@dzcode-io/leblad').utils;

...

const wilayasNames = projectWilaya(someWilayaObject, ['name', 'name_ar', 'name_en']);
```

#### isValidWilayaCode(code:number)

Check if a given wilaya code (matricule) is valid (i.e is an integer between 1 and 48).

**Arguments**

- `code: number` (**required**) Wilaya code

#### isValidZipCode(code:(number|string))

Check if a given zip code is valid (i.e is an integer between 1000 and 48073).

**Arguments**

- `code: (number|string)` (**required**) zip code

## Local development

#### Perquisites

Make sure you have:

- [Git](https://git-scm.com/)
- [Nodejs](https://nodejs.org/) version 10 or higher

#### Install the dependencies

```
npm install
```

#### Update the Wilayas dataset

```
npm run update-dataset
```

#### Testing

Simply run

```
npm test
```

Or this command for the `watch mode`:

```
npm run test.watch
```

You can also run [mutation tests](https://en.wikipedia.org/wiki/Mutation_testing) (using [Stryker-mutator](https://stryker-mutator.io/))

```
npm run test.mutation
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://zakiii.com"><img src="https://avatars2.githubusercontent.com/u/20110076?v=4" width="100px;" alt=""/><br /><sub><b>Zakaria Mansouri</b></sub></a><br /><a href="#tool-ZibanPirate" title="Tools">🔧</a> <a href="https://github.com/dzcode-io/leblad/pulls?q=is%3Apr+reviewed-by%3AZibanPirate" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://oussamabouchikhi.github.io"><img src="https://avatars0.githubusercontent.com/u/45850487?v=4" width="100px;" alt=""/><br /><sub><b>Oussama Bouchikhi</b></sub></a><br /><a href="https://github.com/dzcode-io/leblad/commits?author=oussamabouchikhi" title="Code">💻</a></td>
    <td align="center"><a href="http://abachi.github.io"><img src="https://avatars3.githubusercontent.com/u/12300606?v=4" width="100px;" alt=""/><br /><sub><b>Nasser Abachi</b></sub></a><br /><a href="https://github.com/dzcode-io/leblad/commits?author=abachi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/anuragsati"><img src="https://avatars2.githubusercontent.com/u/52669445?v=4" width="100px;" alt=""/><br /><sub><b>Anurag sati</b></sub></a><br /><a href="https://github.com/dzcode-io/leblad/commits?author=anuragsati" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/AmineVolk"><img src="https://avatars1.githubusercontent.com/u/37228315?v=4" width="100px;" alt=""/><br /><sub><b>HamdiAmine</b></sub></a><br /><a href="https://github.com/dzcode-io/leblad/commits?author=AmineVolk" title="Code">💻</a></td>
    <td align="center"><a href="http://www.keefer.tech"><img src="https://avatars1.githubusercontent.com/u/16760467?v=4" width="100px;" alt=""/><br /><sub><b>xxKeefer</b></sub></a><br /><a href="https://github.com/dzcode-io/leblad/commits?author=xxKeefer" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/joeylnguyen"><img src="https://avatars2.githubusercontent.com/u/59431792?v=4" width="100px;" alt=""/><br /><sub><b>Joey Nguyen</b></sub></a><br /><a href="https://github.com/dzcode-io/leblad/commits?author=joeylnguyen" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Contributing

When contributing to this repository, please first discuss the change you wish to make by opening an [issue](https://github.com/dzcode-io/leblad/issues/new/choose), sending an e-mail, or any other method with us before making a change.

And also, please make sure to read our [guidelines for contributing](./.github/CONTRIBUTING.md).

## Similar projects

- [dz-communes](https://github.com/AM-77/dz-communes) An NPM package exposing a list of all of the 48 wilayas of Algeria and their communes.
- [algeria-api](https://github.com/fcmam5/algeria-api) An web API exposing Wilayas data. We data from that project as a source of truth for ([data/WilayaList.json](./data/WilayaList.json))

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
