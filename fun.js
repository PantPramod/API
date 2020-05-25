var body=document.querySelector('body');
var card=document.querySelector('.card');
card.style.display="none";
var a=document.querySelector('.a');
var b=document.querySelector('.b');
var c=document.querySelector('.c');
var d=document.querySelector('.d');
var e=document.querySelector('.e');
var f=document.querySelector('.f');
var g=document.querySelector('.g');
var h=document.querySelector('.h');
var url="https://api.covid19india.org/data.json";
(function getdata(){
   
    fetch(url)
    .then(res=>{return(res.json())})
    .then(data=>{
       for(var i=0; i<data.statewise.length; i++){
            
            
       var card2=document.createElement('div');
       card2.className="card2";
       body.appendChild(card2);


       var p1=document.createElement('p');
       p1.className="a"
       p1.textContent= data.statewise[i].state;
       card2.appendChild(p1);

       var p7=document.createElement('p');
       p7.textContent="Date: "+data.statewise[i].lastupdatedtime;
       p7.className="g";
       card2.appendChild(p7);
       
       var p2=document.createElement('p');
       p2.textContent="Total Confirmed: "+data.statewise[i].confirmed;
       p2.className="b";
       card2.appendChild(p2);
       
       var p4=document.createElement('p');
       p4.textContent="Total Recovered: "+data.statewise[i].recovered;
       p4.className="d";
       card2.appendChild(p4);
       
       var pp=document.createElement('p');
       pp.textContent="Total Active: "+data.statewise[i].active;
       pp.className="c";
       card2.appendChild(pp);

       var p3=document.createElement('p');
       p3.textContent="Total Deaths: "+data.statewise[i].deaths;
       p3.className="c";
       card2.appendChild(p3);
            
      
        }
        })
})();



function search(){
    var search= document.getElementById('state').value;
    if(search==""){
        alert("Enter Name of State")
    }else{
    
    card.style.display="block"; 
    var searchsplit=search.split('');
    searchsplit[0]=searchsplit[0].toUpperCase();
    for(let i=1; i<searchsplit.length; i++){
        searchsplit[i]=searchsplit[i].toLowerCase();
    }
   var searches= searchsplit.join('');
   console.log(searches);
   
   fetch(url)
   .then(res=>{return(res.json())})
   .then(data=>{    
          var arr=data.statewise.filter(function(element){
             if(element.state.indexOf(searches)>-1)
             return element
             
     })
     
    

        
        a.textContent=arr[0].state;
        
        
        b.textContent="Updated: "+arr[0].lastupdatedtime;
        
        
        c.textContent="Total Deaths: "+arr[0].TotalDeaths;
        
        
        d.textContent="Confirmed: "+arr[0].confirmed;
        
        
        e.textContent="Recovered: "+arr[0].recovered;
        
        f.textContent="Active: "+arr[0].active;
        
        
        g.textContent="Deaths: "+arr[0].Date;
    
     
 
 })
}
}
