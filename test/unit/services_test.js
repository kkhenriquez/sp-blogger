describe('postFactory test\n', function(){
  beforeEach(module('spBlogger.posts.services'));

  it('postFactory should return 4 post objects', inject(function(postFactory){
    expect(postFactory.getAll().length).toBe(4);
  }));

  it('postFactory should return one object for id 2', inject(function(postFactory) {
    expect(postFactory.getPostById(2)).not.toBe(undefined);
  }));
});
