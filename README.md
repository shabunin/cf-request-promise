# Usage

`request(url, method, headers, body)
  .then(function(res) {
    CF.log(res.status);
    CF.log(res.headers);
    CF.log(res.body);
  }).
  catch(function(err) {
    CF.log(err.status);
    CF.log(err.headers);
    CF.log(err.body);
  });`

