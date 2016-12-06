var request = function () {
  var req = Array.prototype.slice.call(arguments);
  return new Promise(function (resolve, reject) {
    req.push(function (status, headers, body) {
      if (status == 200) {
        var res = {
          status: status,
          headers: headers,
          body: body
        };
        resolve(res);
      } else {
        var err = {
          status: status,
          headers: headers,
          body: body
        };
        reject(err);
      }
    });
    CF.request.apply(this, req);
  });
};