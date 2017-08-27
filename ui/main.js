console.log('Loaded!');
var img=document.getElementById('madi');

var marginLeft =0;
function moveRight ()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function(){
    var interval =setInterval(moveRight,100);
    
};
var button=document.getElementByid('counter');

button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementbyId('count');
    span.innerHTML=count.toString();
    
};