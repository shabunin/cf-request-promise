CF.userMain = function () {
  CF.log("Starting cf-request-promise");
};

var requestTest = function (url) {
  request(url)
    .then(function (res) {
      CF.setJoins(
        [ {join: "s1", value: "OK: " + res.status},
          {join: "s2", value: res.body} ]);
    })
    .catch(function (err) {
      CF.setJoins(
        [ {join: "s1", value: "ERR: " + err.status},
          {join: "s2", value: err.body} ]);
    });
};
