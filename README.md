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

#### API

##### getWilayaList(projection?: string[])

Returns a list of Algerian provinces (Wilayas)

**Arguments**

`projection: string[]` (optional) Array of Wilaya Object attributes.

##### getWilayaByZipCode(zipCode: number, projection?: string[])

Returns a wilaya that includes the given zipCode.

**Arguments**

`projection: string[]` (optional) Array of Wilaya Object attributes.
`zipCode: number` (required) A zip code.

**Examples**

```javascript
const { getWilayaList, getWilayaByZipCode } = require('leblad');

const allWilayasDetails = getWilayaList();

// if we only want the wilaya names for example:
const wilayasNames = getWilayaList(['name', 'name_ar', 'name_en']);

// To get the wilaya that includes the zip code 1000, We can use getWilayaByZipCode
// This example will return Adrar { name: "Adrar", ...}
const wilaya = getWilayaByZipCode(1000);

// We can also select only attributes that we want, For example select name and mattricule:
const wilayaAttributes = getWilayaByZipCode(1000, ['name', 'mattricule']);
```

##### getWilayaByCode(wilayaCode?: number)

Takes a wilaya code (matricule) and returns the matching wilaya

**Arguments**

`wilayaCode: number` (**required**) the Wilaya's "matricule"

**Examples**

```javascript
const { getWilayaByCode } = require('leblad');
console.log(getWilayaByCode(31)); // will print {name: "Oran"...}
```

### Local development

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

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
