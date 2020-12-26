window.onload=function(){
    var getTxt1=document.getElementById("demo1");
    var content1=document.getElementById("content1");
    
    var xhr=new XMLHttpRequest();
    
    getTxt1.addEventListener("click",function(){
     xhr.addEventListener('readystatechange',function(){
        content1.innerHTML=this.responseText;
     });
     xhr.open("GET","s1.txt",true);
     xhr.send();
    });
   
    
    
    
    var getTxt2=document.getElementById("demo2");
    var content2=document.getElementById("content2");
    
    var xhr1=new XMLHttpRequest();
    
    getTxt2.addEventListener("click",function(){
     xhr1.addEventListener('readystatechange',function(){
        content2.innerHTML=this.responseText;
     });
     xhr1.open("GET","s2.txt",true);
     xhr1.send();
    });
    
    
    
    var getTxt3=document.getElementById("demo3");
    var content3=document.getElementById("content3");
    
    var xhr2=new XMLHttpRequest();
    
    getTxt3.addEventListener("click",function(){
     xhr2.addEventListener('readystatechange',function(){
        content3.innerHTML=this.responseText;
     });
     xhr2.open("GET","s3.txt",true);
     xhr2.send();
    });
    
};