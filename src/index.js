import cipher from './cipher.js';


const encode = document.getElementById('cipherBtn');

    encode.addEventListener('click', function () {
    let text = document.getElementById('text-original').value;
    let code = document.getElementById('code').value;
        
    document.getElementById('result').value = cipher.encode(code, text);
});

const decode = document.getElementById('decipherBtn');
    decode.addEventListener('click', function () {
    let text = document.getElementById('text-original').value;
    let code = document.getElementById('code').value;

    document.getElementById('result').value = cipher.decode(code, text);
});

const clean = document.getElementById('cleanBtn');
clean.addEventListener('click', function () {
    document.getElementById('text-original').value = "";
    document.getElementById('code').value = "";
    document.getElementById('result').value = "";
});


//     document.getElementById('decipherBtn').addEventListener('click', function (){
//         let text = textCipher.value;
//         let code = codeCipher.value;
//         result.innerHTML = "estos son los valores: " + code + " y " + text;

//     }, true);

// }


// if (text)
//     for (let i = 0; i < text.length; i++) {
//         console.log(i);
//     }


// console.log(text);
// console.log(text.charCodeAt());

// text = text.toUpperCase();
// text = text.split('');


// document.getElementById('CipherBtn').addEventListener('click', getCipher);

// function getCipher() {
//     let code = codeCipher.value;

//     let text = textCipher.value;
    
//     text = text.toUpperCase();
//     text = text.split('');

//     // let abc = text.charCodeAt(0);

    // result.innerHTML =  "estos son los valores: " + code + " y " + text;
// }

