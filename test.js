function setUpEvents(){
    var a=document.getElementsByClassName("banner-content");
    var tag=a[0].getElementsByTagName("span");
    var i=0;
    var phrases=[
        "Maths Olympiad",
        "English Olympiad",
        "Grads Olympiad",
        "Finance Olympiad",
        "Science Olympiad"
    ]
    var change=function(){
        tag[0].innerHTML=phrases[i++];
        if(i===5)
        i=0;
    };
    setInterval(change , 4000);
    console.log(tag);
}
window.onload=function(){
    setUpEvents();
};