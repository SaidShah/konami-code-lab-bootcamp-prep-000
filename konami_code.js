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

var counter =0
  document.body("keydown",(event)=>{
   
   var keyName = event.key
   
   if(keyName===codes[counter]){
     counter++

     if(counter==codes.length){
       alert("Codes Entered Correctly");
       counter=0
       
     }
     
   }else{
 alert("Codes Entered ======================================Correctly");
     counter=0
     
   }
 })
}
