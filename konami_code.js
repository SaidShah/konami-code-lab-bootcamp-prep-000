const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
var index =0
function init() {

  

  document.addEventListener("keypress",(event)=>{
   
   var keyName = event.key
   
   if(keyName===codes[index]){
     index++
     
     if(index===codes.length){
       alert("Codes Entered Correctly");
       index=0
       
     }
     
   }else{
     
     index=0
     
   }
 })
}
