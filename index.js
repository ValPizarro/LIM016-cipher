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