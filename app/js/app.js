'use strict';

// Declare app level module which depends on views, and components
angular.module('spBlogger', [
  'ui.router',
  'spBlogger.posts',
  'spBlogger.admin',
  'spBlogger.version'
]);

angular.module('spBlogger').run(['$state', function($state) {
  $state.go('allPosts');
}]);
