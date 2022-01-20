
/*const showBtn=document.getElementsByClassName("show-btn");
const modelcontiner2=document.getElementById("model-continer2");
const modelcontiner=document.getElementById("model-continer");
const model_img=document.getElementById('model-img');

for (let i=0 ; i< showBtn.length ; i++){
showBtn[i].addEventListener('click', function(){
var img = showBtn[i].getAttribute('src');
model_img.setAttribute('src',img);


})
}*/

const modelcontiner=document.getElementById("model-continer");
const showBtnn=document.getElementById("show-btnn");
showBtnn.addEventListener("click",()=>{
    modelcontiner.style.visibility='visible';
});
const modelcontiner2=document.getElementById("model-continer2");
const signup=document.getElementById("signup");
signup.addEventListener("click",()=>{
    modelcontiner2.style.visibility='visible';
});
//const modelcontiner=document.getElementById("model-continer");
/*const img=document.getElementById("model-img");
showBtn.addEventListener("click",()=>{
    img.setAttribute('src','./2.PNG');
});
*/
const countdown=()=>{
    const upperDate=new Date('Jan 20, 2022 00:00:00').getTime();
    const currentDate=new Date().getTime();
    const diffDate=upperDate-currentDate;
    
    const second=1000;
    const minutes=second* 60 ;
    const houres =minutes *60;
    const days = houres*24;
     
    const remain_days=Math.floor(diffDate/days);
    const remain_houres=Math.floor((diffDate%days)/houres);
    const remain_minutes=Math.floor((diffDate%houres)/minutes);
    const remain_second=Math.floor((diffDate%minutes)/second);
    var d=document.getElementById('days');
    var h=document.getElementById('hours');
    var m=document.getElementById('minutes');
    var s=document.getElementById('seconds');
    d.innerHTML=remain_days;
    h.innerHTML=remain_houres;
    m.innerHTML=remain_minutes;
    s.innerHTML=remain_second;

}
setInterval(countdown,1000);
