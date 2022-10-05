export function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("timeout"));
    }, ms);
    promise.then(resolve, reject);
  });
}

// example =)

/*
  timeout(1000, fetch('/hello')).then(function(response) {
    // process response
  }).catch(function(error) {
    // might be a timeout error
  })
  */
