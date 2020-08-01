 let div = document.createElement('div');
 div.setAttribute('class', 'div')
  document.body.appendChild(div);


 var p = document.createElement('p');
 p.innerText += 'Guess a number 1 - 10:'
 div.appendChild(p)


let input = document.createElement('input')
input.setAttribute('id','input')
input.setAttribute('type', 'number')
input.setAttribute('min', "0")
input.setAttribute('max', '10')
div.appendChild(input);

let br = document.createElement('br');
div.appendChild(br);

 let submit = document.createElement('input')
 submit.setAttribute('type', 'submit')
 submit.setAttribute('value','submit')
 submit.setAttribute('id', 'submit')
 submit.innerHTML= "submit"
div.appendChild(submit);

    var y = Math.floor(Math.random() * 10 + 1); 
    console.log(y)
      
    var guess = 1; 
      
    document.getElementById("submit").onclick = function(){ 
            
   var x = document.getElementById("input").value; 
  
   if(x == y) {     
       alert("You WON!!! You guess in "
               + guess + " guesses. "); 
   } 
   else if(x > y) {  
       guess++;   
       alert("Try a smaller number"); 
   } 
   else if(x < y){ 
       guess++;
       alert("Try a bigger number") 
   } else if (guess !== 3){
  alert('you lose') 
   }

} 