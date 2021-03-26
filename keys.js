import { keyData } from "./sounds.js";

window.addEventListener("keydown", kepPress);
let newDiv = document.getElementById("rt");


function kepPress(evt)
{
    if(keyData[evt.key]) 
    {
        let pos = Math.floor( Math.random() *screen.availWidth);
        keyData[evt.key].sound.play();
        let nD = document.createElement("div");
        nD.innerText = evt.key;
        nD.style.left = pos + "px";
        nD.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        newDiv.appendChild(nD);
        setTimeout(function(){ newDiv.removeChild(newDiv.childNodes[0]); }, 4000);
    }
}

