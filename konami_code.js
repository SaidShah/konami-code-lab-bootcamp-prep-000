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
  var counter =0

function init() {


  document.addEventListener("keypress",(event)=>{
   
 //  var keyName = event.key
   
   if(event.key===codes[counter]){
     counter++

     if(counter==codes.length){
       alert("Codes Entered Correctly");
       counter=0
       
     }
     
   }else{

     counter=0
     
   }
 })
}
