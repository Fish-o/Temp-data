

function delete_card(e)
{
    let to_remove = e.parentNode
    to_remove.style.opacity = '0';
    setTimeout(function(){e.parentNode.parentNode.removeChild(to_remove);}, 250);
    ;
}

function add_card(e)
{
    let to_add = document.getElementById("BLANKMODULE")
    let to_add_to = e.parentNode.parentNode;
    let clone = to_add.cloneNode(true);
    clone.removeAttribute('id');
    //clone.removeAttribute("style")
    clone.style.display = null;
    //clone.style.marginTop = '30px';
    //clone.style.opacity = '0';
    //clone.style.setProperty("-webkit-transition", "opacity 250ms ease");
    //clone.style.transition = 'opacity 250ms ease';
    //clone.style = 
    //'margin-top: 30px;opacity: 0;-webkit-transition: opacity 250ms ease-in;transition: opacity 250ms ease-in; ';
    
    
    var new_node = to_add_to.appendChild(clone);
    new_node.style.opacity = '1';
    
}

function update(){
    var customcommandname = document.getElementById("customcommandname");
    var customcommandout = document.getElementById("customcommandout");

    var modulesDOM = document.getElementById("all-modules");
    var modules = modulesDOM.getElementsByTagName("div"); // a list of matching elements, *not* the element itself
    let all_text = []
    for (let module of modules) {
        try{
            //let module = modules[moduleind]
            var text_inps = module.getElementsByTagName("textarea")[0]; 
            all_text.push(text_inps.value)
        }catch(err){
            console.log(err)
        }
    };
    if(all_text[0] && customcommandname.value.length > 0){
        const objec = {
            a:customcommandname.value,
            b:all_text
        }
        customcommandout.textContent = `!custom ${JSON.stringify(objec)}`
    }
}