# @magic/entities

exports most html entities.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/entities.svg
[npm-url]: https://www.npmjs.com/package/@magic/entities
[travis-image]: https://img.shields.io/travis/com/magic/entities/master
[travis-url]: https://travis-ci.com/magic/entities
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/entities/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/entities/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/entities/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/entities
[greenkeeper-image]: https://badges.greenkeeper.io/magic/entities.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/entities.svg
[snyk-image]: https://snyk.io/test/github/magic/entities/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/entities

## installation:

```bash
  npm install @magic/entities
```

## usage:

### import entities

@magic/entities export an array of entities.

each entity is an array of the form [numId, symbol, stringId, info]

```javascript
import { entities } from '@magic/entities'

// entities is an array filled with arrays:

const item = entities[4]
const [numId, symbol, stringId, info] = item

// not all entities have a stringId or a symbol.

```

### isEntity

isEntity can test if a string is a valid entity.

isEntity also tests if the string exists in the entities list.


```javascript
import { isEntity } from '@magic/entities'

isEntity('&#39;') // true
isEntity(39)      // false

```


### entityFromId

entityFromId can be passed a string or number.

wraps string in & and ;

wraps numbers in &# and ;

```javascript
import { entityFromId } from '@magic/entities'

entityFromId(39) // '&#39;'
entityFromId('lt') // '&#lt;'

```


#### changelog

##### 0.0.1
first commit

##### 0.0.2 
add quot for quotation marks. #quot; is a thing...

##### 0.0.3
bump required node version to 14.2.0

##### 0.0.4
update @magic/types

##### 0.0.5
* bump required node version to 14.15.4
* update dependencies

##### 0.0.6 - unreleased
...
