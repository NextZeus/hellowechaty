const wechaty = require("wechaty");

wechaty.instance()
.on('scan',(url,code)=>{
    console.log(`Scan QR Code to login: ${code}\n${url}`);
})
.on('login', user=>{
    console.log(`User ${user} logined`);
})
.on('message', message=>{
    console.log(`Receive message: ${message}`);
})
.init();