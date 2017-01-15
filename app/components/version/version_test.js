'use strict';

describe('spBlogger.version module', function() {
  beforeEach(module('spBlogger.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('1.1');
    }));
  });
});
