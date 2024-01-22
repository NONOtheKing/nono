//let opositAlphabet = [];

/*function FirstEncryption() {                        //this making a Array of alphabetic characters staring form Z to A : opositAlphabet
    for (let i = 0; i < alphabet.length; i++) {
        opositAlphabet[i] = alphabet[alphabet.length - 1 - i];
        console.log(opositAlphabet);
    }
}*/
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
opositAlphabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
const nono = [
    "oooon",
    "ooono",
    "ooonn",
    "oonoo",
    "oonon",
    "oonno",
    "oonnn",
    "onooo",
    "onoon",
    "onono",
    "ononn",
    "onnoo",
    "onnon",
    "onnno",
    "onnnn",
    "noooo",
    "nooon",
    "noono",
    "noonn",
    "nonoo",
    "nonon",
    "nonno",
    "nonnn",
    "nnooo",
    "nnoon",
    "nnono",
];
function input() {
    let inputWord = document.querySelector('.input').value.toLowerCase();//we put 'tolowercase()' because ower array contain just lowercase 
    let outputWord = "";
  
    for (let i = 0; i < inputWord.length; i++) {// trying know how many letter wrote
        let inputChar = inputWord[i];//taking the first letter
        let index = alphabet.indexOf(inputChar);// index take the number of the letter in the array,if the letter not exists then he well take -1
        
        if (index !== -1) {
            outputWord += opositAlphabet[index];
        } else {
            outputWord += inputChar; // Keep non-alphabetic characters unchanged
        }
    }
    let output = "";
    for (let i = 0; i < outputWord.length; i++){
         let outputvalue  = outputWord[i]
         let index01 = alphabet.indexOf(outputvalue);
         if (index01 !== -1) {
           output += nono[index01];
         }else{
            output += outputvalue;
         };
        };
     
        document.querySelector('.output').innerHTML = output;  

};

// Call FirstEncryption() once to initialize opositAlphabet
//FirstEncryption();

    //document.querySelector('.output').innerHTML = outputWord;
  /*  for (let i = 0; i < outputWord.length; i++) {
            let inputChar = inputWord[i];
            let index = alphabet.indexOf(inputChar);
            let index01 = nono[index];
            if (index !== -1) {
                index01 += index01[index];
            } else {
                index01 += inputChar; // Keep non-alphabetic characters unchanged
            };
            outputWord += index01;
            }*/    
