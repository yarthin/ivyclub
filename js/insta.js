 var galleryFeed = new Instafeed({
  get: "user",
    userId: '3874591685',
    clientId: '	126343199b914f309ad148f0b0724454',
    accessToken: '3874591685.1263431.e1449dcdb0b6450ea0e0dbd9b006165f',
  resolution: "thumbnail",
  useHttp: "true",
  limit: 6,
  template: '<div class="col-xs-12 col-sm-6 col-md-2"><a href="./photos"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
});
galleryFeed.run();