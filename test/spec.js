/**
 * bootstrap-analytics
 *
 *    Library test
 */

'use strict'

var assert = require('assert'),
lib        = require('../lib/bootstrap-analytics');

describe('Basic library test', function() {
  it('should answer all questions with YO!', function() {
    var answer = lib.bootstrap-analytics('Should I tickle this unicorn?');
    assert.equal(answer,'YO!');
  })
})
