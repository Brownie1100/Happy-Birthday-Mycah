let c=0;
var element1 = document.getElementById('content-section');
var element2 = document.getElementById('content-section1');
element1.style.display='none';
element2.style.display='none';

// function Clickbutton() {
//     event.preventDefault();
//     var element=document.getElementById("welcome-section");
//     var element2 = document.getElementById('content-section');
//     if(element2.style.display==="none"||element2.style.display===""){
//         element2.style.display='block';
//         element.style.display="none";
//     }
// }

function Clickfooter(){
    let img1=document.getElementsByClassName("img1")[0];
    let img2=document.getElementsByClassName("img2")[0];
    img1.style.display='none';
    img2.style.display="none";

    let main=document.getElementById('main');
    main.style.display="none";

    let header=document.getElementById('header');
    header.textContent="HEARD YOU LIKE CATS";
    header.style.fontSize = "4.0em";
    header.style.margin = "50px";
    header.style.color= "#C0C0C0";

    document.body.style.removeProperty('body');
}

// function ClickContentbutton(){
//     event.preventDefault();
//     var element=document.getElementById("welcome-section");
//     var element2 = document.getElementById('content-section');
//     if(element.style.display==="none"||element.style.display===""){
//         element.style.display='block';
//         element2.style.display="none";
//     }
// }
function ClickBack(){
    if(c<=0)
        return;

    var element=document.getElementById("welcome-section");
    var element1 = document.getElementById('content-section');
    var element2= document.getElementById('content-section1');
    c--;
    switch(c){
        case 0:
            element.style.display="block";
            element1.style.display='none';
            element2.style.display='none';
            break;
        case 1:
            element.style.display="none";
            element1.style.display='block';
            element2.style.display='none';
            break;
        case 2:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='block';
            break;
    }
}
function ClickNext(){
    if(c>=2)
        return;

    var element=document.getElementById("welcome-section");
    var element1 = document.getElementById('content-section');
    var element2= document.getElementById('content-section1');

    c++;
    switch(c){
        case 0:
                element.style.display="block";
                element1.style.display='none';
                element2.style.display='none';
                break;
        case 1:
            element.style.display="none";
            element1.style.display='block';
            element2.style.display='none';
            break;
        case 2:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='block';
            break;
    }
}