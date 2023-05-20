const switchBtn = document.getElementsByClassName('switchbtn')[0];
switchBtn.addEventListener('click', function(e){
    e.preventDefault();
    //switchBtn.style.right = "0";
    switchBtn.style.left = "50%";
    switchBtn.innerHTML = "&leftarrow; OFF";
    switchBtn.classList.add("switchOff");
    switchBtn.setAttribute("onclick", "switchOn()");

    //remove the image
    const container = document.getElementById('container');
    container.style.background = "red";
})
function switchOn(){
    switchBtn.style.left = "0%";
    switchBtn.innerHTML = "&rightarrow; ON";
    switchBtn.classList.remove('switchOff');
    switchBtn.removeAttribute('onclick');

    const container = document.getElementById('container');
    container.style.background = 'yellow';
}

const image = document.querySelectorAll('.items')[0];
let image_children = image.children;
 nth_item = image_children.length;
lastChild = nth_item - 1;

let counter = 0;

const startTimer = setInterval(carousel, 3000);

carousel();
function carousel(){
    let active_div = image_children[counter];
    console.log(active_div)
    for(let i = 0; i < image_children.length; i++){
        if(i !== counter){
            inactive_div = image_children[i];
            inactive_div.style.backgroundColor = "transparent";
            inactive_div.style.transition = "all 2s linear";
            inactive_div.style.transform = "translateX(-20%)";
        }else{
            inactive_div = image_children[i];
            active_div.style.backgroundColor = "black";
            inactive_div.style.transition = "all 2s linear";
            inactive_div.style.transform = "translateX(0%)";
        }
        
    }
    counter = counter + 1;
    if(counter == nth_item + 1){
        counter = 0;
        carousel();
    }

}

