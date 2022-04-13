function setup(params) {

};

var tw = function () {
  return {
    fetch: function (twid, tc, cbf) {
    (tweets_count=tc, cbfunc = cbf, c = document.createElement("script"), c.type = "text/javascript", c.src = "//cdn.syndication.twimg.com/widgets/timelines/" + twid + "?&lang=en&callback=tw.callback&suppress_response_codes=true&rnd=" + Math.random(), document.getElementsByTagName("head")[0].appendChild(c))
    },
    callback: function (e) {
      var c = document.createElement("div");
      c.setAttribute("id", "twitter-stage");
      c.innerHTML = e.body;
      c.style.display="none";
      document.body.appendChild(c);
      var tweet_json = [];
      usr_imgs = document.querySelectorAll('#twitter-stage div ol.h-feed li div.header div a.u-url.profile img.u-photo.avatar');
      usr_names = document.querySelectorAll('#twitter-stage ol li div.header span.full-name span');
      usr_screen_names = document.querySelectorAll('#twitter-stage ol li div.header a.u-url.profile span b');
      tweets = document.querySelectorAll('#twitter-stage ol li div.e-entry-content p.e-entry-title');
      dates = document.querySelectorAll('#twitter-stage ol.h-feed li div.header a time');
      tweetids = document.querySelectorAll('#twitter-stage ol.h-feed li div ul li:first-of-type a');
      for(i=0;iNow include the file and use it as following
        function tweets(tws){
  $.each(tws, function(i,o){
    // You can do as you wish with the values in 'o' objects.
    console.log(o);
  });
}
// this will fetch tweets of the given widget id and pass the tweets to tweets function
tw.fetch('441110970094473216', 20, tweets);