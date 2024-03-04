var elementc = document.getElementById('content-section');
elementc.style.display='none';

function Clickbutton() {
    event.preventDefault();
    var element=document.getElementById("welcome-section");
    var element2 = document.getElementById('content-section');
    if(element2.style.display==="none"||element2.style.display===""){
        element2.style.display='block';
        element.style.display="none";
    }
}

function Clickfooter(){

}

function ClickContentbutton(){
    event.preventDefault();
    var element=document.getElementById("welcome-section");
    var element2 = document.getElementById('content-section');
    if(element.style.display==="none"||element.style.display===""){
        element.style.display='block';
        element2.style.display="none";
    }
}