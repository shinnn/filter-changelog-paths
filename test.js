'use strict';

const path = require('path');

const filterChangelogPaths = require('.');
const {test} = require('tap');

test('filterChangelogPaths', t => {
  t.plan(6);

  t.strictEqual(filterChangelogPaths.name, 'filterChangelogPaths', 'should have a function name.');

  const expected = path.join('1/2/3', 'changelog.txt');

  t.same(
    filterChangelogPaths([expected, 'foo']),
    [expected],
    'should filter changelog-like paths.'
  );

  t.same(
    filterChangelogPaths(['foo', 'bar']),
    [],
    'should return an empty array when the array contains no changelog-like paths.'
  );

  t.throws(
    () => filterChangelogPaths(1),
    new TypeError('1 is not an array. Expected an array of file paths.'),
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => filterChangelogPaths(['foo', 1, 'bar', true]),
    new TypeError(
      'The array includes non-string value(s): 1 (index: 1) and true (index: 3). ' +
      'Expected every item in the array to be a file path.'
    ),
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => filterChangelogPaths(),
    new TypeError('undefined is not an array. Expected an array of file paths.'),
    'should throw a type error when it takes no arguments.'
  );
});

test('filterChangelogPaths.posix', t => {
  t.plan(2);

  t.strictEqual(
    filterChangelogPaths.posix.name,
    'filterChangelogPathsPosix',
    'should have a function name.'
  );

  t.same(
    filterChangelogPaths.posix(['dir\\History']),
    [],
    'should always treat paths in a posix compatible way.'
  );
});

test('filterChangelogPaths.win32', t => {
  t.plan(2);

  t.strictEqual(
    filterChangelogPaths.win32.name,
    'filterChangelogPathsWin32',
    'should have a function name.'
  );

  t.same(
    filterChangelogPaths.win32(['dir\\History']),
    ['dir\\History'],
    'should always treat paths in a win32 compatible way.'
  );
});
