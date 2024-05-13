let characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

function btn(length){
    let characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let captcha='';
    const captchaLen=length 
    for (let i=0; i<captchaLen; i++){
        captcha+=characters.charAt(Math.floor(Math.random()*characters.length))
    }
    document.getElementById('captcha').innerHTML=captcha
}




function btn(length) {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let captcha = '';
    const captchaLen = length;
    for (let i = 0; i < captchaLen; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha').innerHTML = captcha;
    document.getElementById('captcha').style.fontSize="1.2rem";
    document.getElementById('captcha').style.marginTop="1rem";
    document.getElementById('captcha').style.marginLeft="1rem";
}