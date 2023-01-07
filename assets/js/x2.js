function main_func(){
  console.log("Hallo vanaf een js programma gehost van het internet");
  console.log("Dit is mijn origin: "+window.origin);
  console.log("Dit is mijn domain: "+document.domain);
  console.log("Kijken of ik de pagina ook aan kan passen..")
  const el = top.document.getElementById("inbox-counter");
  console.log("Got element:", el);
  el.innerHtml = "k dat was makkelijk";
}
main_func()
