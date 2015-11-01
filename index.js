/*!
 * filter-changelog-paths | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/filter-changelog-paths
*/
'use strict';

const isChangelogPath = require('is-changelog-path');
const filteredArrayToSentence = require('filtered-array-to-sentence');

const isNotString = v => typeof v !== 'string';

function filterChangelogPathsCore(filePaths, filterFn) {
  if (!Array.isArray(filePaths)) {
    throw new TypeError(`${filePaths} is not an array. Expected an array of file paths.`);
  }

  const nonStringValues = filteredArrayToSentence(filePaths, isNotString);

  if (nonStringValues !== '') {
    throw new TypeError(
      'The array includes non-string value(s): ' +
      nonStringValues +
      '. Expected every item in the array to be a file path.'
    );
  }

  return filePaths.filter(filterFn);
}

module.exports = function filterChangelogPaths(filePaths) {
  return filterChangelogPathsCore(filePaths, isChangelogPath);
};

module.exports.posix = function filterChangelogPathsPosix(filePaths) {
  return filterChangelogPathsCore(filePaths, isChangelogPath.posix);
};

module.exports.win32 = function filterChangelogPathsWin32(filePaths) {
  return filterChangelogPathsCore(filePaths, isChangelogPath.win32);
};
