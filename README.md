# filter-changelog-paths

[![NPM version](https://img.shields.io/npm/v/filter-changelog-paths.svg)](https://www.npmjs.com/package/filter-changelog-paths)
[![Build Status](https://travis-ci.org/shinnn/filter-changelog-paths.svg?branch=master)](https://travis-ci.org/shinnn/filter-changelog-paths)
[![Build status](https://ci.appveyor.com/api/projects/status/7yw5cmfmry41iu9m/branch/master?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/filter-changelog-paths/branch/master)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/filter-changelog-paths.svg)](https://coveralls.io/github/shinnn/filter-changelog-paths)
[![Dependency Status](https://david-dm.org/shinnn/filter-changelog-paths.svg)](https://david-dm.org/shinnn/filter-changelog-paths)
[![devDependency Status](https://david-dm.org/shinnn/filter-changelog-paths/dev-status.svg)](https://david-dm.org/shinnn/filter-changelog-paths#info=devDependencies)

A [Node](https://nodejs.org/) module to extract CHANGELOG-like paths from multiple file paths

```javascript
const filterChangelogPaths = require('filter-changelog-paths');

filterChangelogPaths([
  'CHANGELOG.txt',
  'CONTRIBUTING',
  'project/docs/release_notes.md',
  'lib/index.js'
]);
//=> ['CHANGELOG.txt', 'project/docs/release_notes.md']
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install filter-changelog-paths
```

## API

```javascript
const filterChangelogPaths = require('filter-changelog-paths');
```

### filterChangelogPaths(*filePaths*)

*filePaths*: `Array` of strings (file [path](http://www.linfo.org/path.html)s)  
Return: `Array` of strings

It [filters](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) a given array by using [is-changelog-path](https://github.com/shinnn/is-changelog-path) as a filter function.

```javascript
const filterChangelogPaths = require('filter-changelog-paths');

filterChangelogPaths([]); //=> []

filterChangelogPaths('changelog'); // throws a type error
filterChangelogPaths(['changelog', 1, 'history', true]); // throws a type error
filterChangelogPaths(); // throws a type error
```

### filterChangelogPaths.posix(*filePaths*)

*filePaths*: `Array` of strings (file paths)  
Return: `Array` of strings

Always interact in a [posix](https://www.opengroup.org/austin/papers/posix_faq.html) compatible way.

```javascript
filterChangelogPaths.posix(['dir\\releases']); //=> []
```

### filterChangelogPaths.win32(*filePaths*)

*filePaths*: `Array` of strings (file paths)  
Return: `Array` of strings

Always interact in a [win32](https://msdn.microsoft.com/library/cc433218) compatible way.

```javascript
filterChangelogPaths.win32(['dir\\releases']); //=> ['dir\\releases']
```

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
