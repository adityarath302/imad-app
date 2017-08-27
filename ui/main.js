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

var button=document.getElementById('counter');

var counter=0;
button.onclick=function()
{
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function()
    
    {
        if(request.readyState===XMLHttpRequest.Done)
        {
            if(request.status===200)
            {
                var counter =request.responseText;
                var span =document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
        }
        
    };
    
    request.open('GET','http://u16bic002.imad.hasura-app.io/counter',true);
    
    
    
};