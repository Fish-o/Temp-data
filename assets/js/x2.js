function main_func(){
  console.log("Hallo vanaf een js programma gehost van het internet");
  console.log("Dit is mijn origin: "+window.origin);
  console.log("Dit is mijn domain: "+document.domain);
  console.log("Kijken of ik de pagina ook aan kan passen..")
  const name_el = document.getElementsByClassName("header")?.[0]?.innerHTML;
  console.log("Name found:", name_el);
}
main_func()
