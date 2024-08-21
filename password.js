let keylist='abcdefghijklmnopqurstuvwxyz1234567890!@#$%^&*'
let password=''

let generatepass = (plength)=>{
    password=''
    for(i=0;i<plength;i++){
        password+=keylist.charAt(Math.floor(Math.random() * keylist.length))
    }
    return password
}

let passwordgen=(passl)=>{
    document.output.password.value=generatepass(passl)
}