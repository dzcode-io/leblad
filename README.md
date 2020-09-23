# Le'Blad

A library providing a list of Algerian administrative areas with many useful APIs.

## Getting started

### Usage

#### Node.js

```javascript
const lebledSdk = require('leblad');

// Example: get a full list of Algerian provinces (Wilayas)
console.log(leblad.getWilayaList());
```

## API

 #### getWilayaList(projection?: string[])

Returns a list of Algerian provinces (Wilayas)

**Arguments**

`projection: string[]` (optional) Array of Wilaya Object attributes to keep.

**Examples**

```javascript
const { getWilayaList, getWilayaByZipCode } = require('leblad');

const allWilayasDetails = getWilayaList();

// if we only want the wilaya names for example:
const wilayasNames = getWilayaList(['name', 'name_ar', 'name_en']);
```

#### getWilayaByZipCode(zipCode: number, projection?: string[])

Returns a wilaya that includes the given zipCode.

**Arguments**

`projection: string[]` (optional) Array of Wilaya Object attributes to keep.
`zipCode: number` (required) A zip code.

**Examples**

```javascript
const { getWilayaByZipCode } = require('leblad');

// To get the wilaya that includes the zip code 1000, We can use getWilayaByZipCode
// This example will return Adrar { name: "Adrar", ...}
const wilaya = getWilayaByZipCode(1000);

// We can also select only attributes that we want, For example select name and mattricule:
const wilayaAttributes = getWilayaByZipCode(1000, ['name', 'mattricule']);
```

#### getWilayaByCode(wilayaCode: number, projection?: string[])

Takes a wilaya code (matricule) and returns the matching wilaya

**Arguments**

`wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getWilayaByCode } = require('leblad');

console.log(getWilayaByCode(31)); // will the wilaya object ({name: "Oran"...})
```

#### getAdjacentWilayas(wilayaCode?: number)

Takes a wilaya code (matricule) and returns a list of adjacent wilayas codes

**Arguments**

`wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getAdjacentWilayas } = require('leblad');

console.log(getAdjacentWilayas(31)); // will print [46, 22, 29, 27]
```

#### getZipCodesForWilaya(wilayaCode?: number)

Takes a wilaya code (matricule) and returns a list of Respective Zip-Codes for that wilaya

**Arguments**

`wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getZipCodesForWilaya } = require('leblad');

console.log(getZipCodesForWilaya(31)); //returns list of zip codes for wilaya 31
```

#### getDairatsForWilaya(wilayaCode: number, projection?: string[])

Takes a wilaya code (matricule) ans returns list of all dairats of that wilaya.


**Arguments**

`wilayaCode: number` (**required**) the Wilaya's "matricule".
`projection: string[]` (optional) Array of Wilaya Object attributes to keep.

**Examples**
```javascript
const { getDairatsForWilaya } = require('leblad');

console.log(getDairatsForWilaya(3)); //returns list of dairats for wilaya 3
```

## Helper methods


#### wilayaProjection(wilaya: (object|array), projection?: string[])

Return an object or an array of object with only wilaya attribute you select in the `projection` attributes array.

**Arguments**

`projection: string[]` (optional) Array of Wilaya Object attributes.

**Examples**

```javascript
const { projectWilaya } = require('leblad').utils;

...

const wilayasNames = projectWilaya(someWilayaObject, ['name', 'name_ar', 'name_en']);
```

#### isValidWilayaCode(code:number)

Check if a given wilaya code (matricule) is valid (i.e is an integer between 1 and 48).

**Arguments**

`code: number` Wilaya code.


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

## Contributing

When contributing to this repository, please first discuss the change you wish to make by opening an [issue](https://github.com/dzcode-io/leblad/issues/new/choose), sending an e-mail, or any other method with us before making a change.

And also, please make sure to read our [guidelines for contributing](./.github/CONTRIBUTING.md).

## Similar projects

- [dz-communes](https://github.com/AM-77/dz-communes) An NPM package exposing a list of all of the 48 wilayas of Algeria and their communes.
- [algeria-api](https://github.com/fcmam5/algeria-api) An web API exposing Wilayas data. We data from that project as a source of truth for ([data/WilayaList.json](./data/WilayaList.json))

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
