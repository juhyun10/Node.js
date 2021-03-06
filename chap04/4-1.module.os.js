/*******************************
TITLE: os모듈 사용법
        https://nodejs.org/dist/latest-v6.x/docs/api/os.html
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 모듈 추출
var os = require('os');

// 모듈 사용
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
