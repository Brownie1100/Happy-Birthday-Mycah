var elementc = document.getElementById('content-section');
elementc.style.display='none';

function Clickbutton() {
    event.preventDefault();
    var element = document.getElementById('content-section');
    var element2=document.getElementById("welcome-section-message");
    if(element.style.display==="none"||element.style.display===""){
        element.style.display='block';
        element2.style.display="none";
    }
    else{
        element.style.display='none';
        element2.style.display="block";
    }
}

function Clickfooter(){

}