let c=0;
let f=0;
var element1 = document.getElementById('content-section');
var element2 = document.getElementById('content-section1');
var element3 = document.getElementById('cute-cat');
var element4=document.getElementById('content-section2');
var element5=document.getElementById('content-section3');
var header2 = document.getElementById('header2');

element1.style.display='none';
element2.style.display='none';
element3.style.display='none';
element4.style.display='none';
element5.style.display='none';
header2.style.display='none';

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
    f++;

    let img1=document.getElementsByClassName("img1")[0];
    let img2=document.getElementsByClassName("img2")[0];
    let back_next=document.getElementById("back-next");
    let main=document.getElementById('main');
    let header=document.getElementById('header');
    let footer=document.getElementById('footer');
    var kute_kat = document.getElementById('cute-cat');

    // document.body.classList.add("bg-remove");

    if(f%2==1)
    {
        // document.body.classList.add("bg-remove-and-new-screen");
        // document.body.classList.add("new-screen");
    
        img1.style.display='none';
        img2.style.display="none";
        back_next.style.display="none";
        main.style.display="none";
        kute_kat.style.display="block";
        // element4.style.display='block';

        // header.textContent="HEARD YOU LIKE CATS";
        // header.style.fontSize = "2.50vh";
        // header.style.padding = "1.5vh";
        // header.style.color= "#000000";
        // header.style.display='none';
        header.style.display='none';
        header2.style.display='block';
        footer.style.color="#ffffff";
    }
    else if(f%2==0)
    {
        document.body.classList.add("bg-put-screen");
        // header.textContent="HAPPY BIRTHDAY MYCAH";
        // header.style.fontSize = "2.50vh";
        // header.style.padding = "1.5vh";

        // element4.style.display='none';
        // header2.style.position="absolute";

        img1.style.display='block';
        img2.style.display="block";
        back_next.style.display="block";
        main.style.display="block";
        header.style.display='block';
        footer.style.color="#ffffff";
        kute_kat.style.display="none";
        header2.style.display='none';
    }
 

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
    var element3= document.getElementById('content-section2');
    var element4= document.getElementById('content-section3');
    c--;
    switch(c){
        case 0:
            element.style.display="block";
            element1.style.display='none';
            element2.style.display='none';
            element3.style.display='none';
            element4.style.display='none';
            break;
        case 1:
            element.style.display="none";
            element1.style.display='block';
            element2.style.display='none';
            element3.style.display='none';
            element4.style.display='none';
            break;
        case 2:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='block';
            element3.style.display='none';
            element4.style.display='none';
            break;
        case 3:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='none';
            element3.style.display='block';
            element4.style.display='none';
            break;
        case 4:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='none';
            element3.style.display='none';
            element4.style.display='block';
            break;
    }
}
function ClickNext(){
    if(c>=4)
        return;

    var element=document.getElementById("welcome-section");
    var element1 = document.getElementById('content-section');
    var element2= document.getElementById('content-section1');
    var element3= document.getElementById('content-section2');
    var element4= document.getElementById('content-section3');

    c++;
    switch(c){
        case 0:
            element.style.display="block";
            element1.style.display='none';
            element2.style.display='none';
            element3.style.display='none';
            element4.style.display='none';
            break;
        case 1:
            element.style.display="none";
            element1.style.display='block';
            element2.style.display='none';
            element3.style.display='none';
            element4.style.display='none';
            break;
        case 2:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='block';
            element3.style.display='none';
            element4.style.display='none';
            break;
        case 3:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='none';
            element3.style.display='block';
            element4.style.display='none';
            break;
        case 4:
            element.style.display="none";
            element1.style.display='none';
            element2.style.display='none';
            element3.style.display='none';
            element4.style.display='block';
            break;
    }
}