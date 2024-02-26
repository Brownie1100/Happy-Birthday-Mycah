function Clickbutton() {
    event.preventDefault();
 //   alert('Text Clicked!'); // Replace with your desired functionality
    document.getElementById("message").style.display="block";
}
function close(){
    document.getElementById("message").style.display="none";
}