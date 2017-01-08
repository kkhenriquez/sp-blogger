angular.module('spBlogger.posts').config(['$stateProvider', '$locationProvider',
function($stateProvider, $locationProvider) {
  $stateProvider.state('allPosts', {
    url: '/posts',
    templateUrl: 'modules/posts/views/posts.html'
  })
}])
