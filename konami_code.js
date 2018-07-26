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

function init() {

  var index =0

  document.addEventListener("keypress",(event)=>{
   
   var keyName = event.key
   
   if(keyName===codes[index]){
     index++
     
     if(index===codes.length-1){
       alert("Codes Entered Correctly");
       index=0
       
     }
     
   }else{
     
     index=0
     
   }
 })
}
