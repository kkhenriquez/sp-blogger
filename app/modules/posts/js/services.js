angular.module('spBlogger.posts.services', []).factory('postFactory', function() {
  return {
    posts: [{
      id: 1,
      title: 'First Post',
      content: 'Sample content for first post',
      permalink: 'first-post',
      author: 'Kevin',
      datePublished: '2017-03-01'
    }, {
      id: 2,
      title: 'Going Outside',
      content: 'Sample content for second post',
      permalink: 'going-outside',
      author: 'Kevin',
      datePublished: '2017-05-01'
    }, {
      id: 3,
      title: 'Staying Inside',
      content: 'Sample content for third post',
      permalink: 'staying-inside',
      author: 'Kevin',
      datePublished: '2017-07-01'
    }, {
      id: 4,
      title: 'Going to the Party',
      content: 'Sample content for fourth post',
      permalink: 'going-to-the-party',
      author: 'Kevin',
      datePublished: '2017-08-01'
    }],
    getAll: function() {
      return this.posts;
    },
    getPostById: function(id) {
      for (var i in this.posts) {
        if (this.posts[i].id == id){
          return this.posts[i];
        }
      }
    },
  }
});
