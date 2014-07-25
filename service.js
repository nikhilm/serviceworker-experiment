onfetch = function(e) {
  dump("service.js Received fetch event!\n");
  var request = e.request;
  dump("request.url = " + request.url + "\n");
  dump("request.method = " + request.method + "\n");
  dump("request.body = " + request.body + "\n");

  var url = new URL(request.url);
  dump("PATH " + url.pathname + "\n");
  if (url.pathname == "/fakescript.js") {
    e.respondWith(new Response({body: "alert('annoying popup');"}));
    return;
  }
}
