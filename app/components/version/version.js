'use strict';

angular.module('spBlogger.version', [
  'spBlogger.version.interpolate-filter',
  'spBlogger.version.version-directive'
])

.value('version', '1.1');
