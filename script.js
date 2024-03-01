var elementc = document.getElementById('content-section');
elementc.style.display='none';

function Clickbutton() {
    event.preventDefault();
 //   alert('Text Clicked!'); // Replace with your desired functionality
  //  document.getElementById("message").style.display="block";
    var element = document.getElementById('content-section');
    if(element.style.display==="none"||element.style.display===""){
        element.style.display='block';
    }
    else{
        element.style.display='none';
    }
}
function close(){
    document.getElementById("message").style.display="none";
}