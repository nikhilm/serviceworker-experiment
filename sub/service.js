onfetch = function(e) {
  dump("sub/service.js Received fetch event!\n");
  var request = e.request;
  dump("request.url = " + request.url + "\n");
  dump("request.method = " + request.method + "\n");
  dump("request.origin = " + request.origin + "\n");
  dump("request.referrer = " + request.referrer + "\n");
  dump("request.body = " + request.body + "\n");

  var url = new URL(request.url);
  dump("PATH " + url.pathname + "\n");
  if (url.pathname == "/sub/index.html") {
    e.respondWith(new SameOriginResponse({body: "Fake embedded content"}));
    return;
  }
}

