'use strict'

let readline = require("readline");
let main = require('./index');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 终端输入
r1.on('line',function(line){
    main.lcd(line);
});