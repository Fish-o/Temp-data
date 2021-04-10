document.onkeypress = function(e) {
  var get = window.event ? event : e;
  var key = get.keyCode ? get.keyCode : get.charCode;
  var key = String.fromCharCode(key);
  console.log(key)
}
