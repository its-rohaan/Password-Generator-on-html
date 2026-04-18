// for (i = 0; i <= 10; i++){
// console.log(i)
//     for (k = 0; k <= 10; k++){
//    console.log(i + `*` + k + `=` + i*k)
// }
// }


// 

//         function myFunction(l) {
//     const char = "abcdefghijklmnopqrstuvwxyz"
//     const num = "1234567798698567499"
//     const ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const spe = "!@#$%^&~|){]}`"
//     const multi = char + num + ba + spe;
//     let result= ""
     
//     for (k = 0; k < l; k++ ) {
      
// const lom = Math.floor(Math.random() * multi.length);

//         result += multi.charAt(lom);
        
        

// }
// return result ;
// }
// console.log(myFunction(10));
//  setInterval(function digitalClock() {
//     const d = new Date();
//     document.getElementsByClassName(`.button`).innerHTML = d.toLocaleTimeString();
//  }, 1000)
//  const connect = document.querySelector(`connect`)

        function codeGenerator() { 
            const lengthInput = document.getElementById(`lengthy`);
            const length = parseInt(lengthInput.value);
            
    const char = "abcdefghijklmnopqrstuvwxyz"
    const num = "1234567798698567499"
let ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const spe = "!@#$%^&*()_+=-{}[]|?>,>~``"
    let available = ""
    if(document.getElementById('up').checked){
        available += ba
    }
     if(document.getElementById('down').checked){
        available += char
    }
     if(document.getElementById('sym').checked){
        available += spe
    }
     if(document.getElementById('num').checked){
        available += num
    }
    let result= ""
    for (k = 0; k < length; k++ ) {
      
const lom = Math.floor(Math.random() * available.length);

        result += available.charAt(lom);

        
    }
    return result ;
  

     
}

document.getElementById("connect").addEventListener("click", function(){
    // document.getElementById("empty").innerHTML = codeGenerator();
    const gen = codeGenerator()
    if (gen != "Error") {
        document.getElementById('empty').innerHTML = gen;
    }
});

document.getElementById("button").addEventListener("click", function(){
    const copyText = document.getElementById("empty");
    const tempBox = document.createElement("textarea");
    tempBox.value = copyText.textContent;
    document.body.appendChild(tempBox);
    tempBox.select();
    tempBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempBox.value); 
    document.body.removeChild(tempBox);
    alert("Copied: " + copyText.textContent);
});
