function main_func(){
  console.log("Hallo vanaf een js programma gehost van het internet");
  console.log("Dit is mijn origin: "+window.origin);
  console.log("Dit is mijn domain: "+document.domain);
  console.log("Kijken of ik de pagina ook aan kan passen..")
  const el = document.getElementsByClassName("logo");
  console.log("Got element:", el);
  el.innerHtml = "Somtoday pwnd";
}
main_func()
