function main_func(){
  const els = Array.prototype.slice.call(document.querySelectorAll("h1, h2, h3, h4, h5, h6, span, label"));
  els.forEach((el)=>el.innerHTML="This is bad")
}
main_func()
