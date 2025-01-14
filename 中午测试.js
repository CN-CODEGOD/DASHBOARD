
const { exec} = require('node:child_process') 
const os = require("os");
const iconv = require('iconv-lite');
const encoding = os.platform() == 'win32' ? 'cp936' : 'utf-8';
const binaryEncoding = 'binary';
// 执行命令并获取结果
const runExec = (powershell) => {   
    return new Promise((resolve, reject) => {
        exec(powershell, { encoding: binaryEncoding }, function(error, stdout, stderr) {
            if (error) {
                reject(iconv.decode(new Buffer.from(error.message, binaryEncoding), encoding));
            } else {
                resolve(iconv.decode(new Buffer.from(stdout, binaryEncoding), encoding));
            }
        });
    })
}


runExec('"powershell" C:\\Users\\Administrator\\search\\crawl.ps1').then(res => {
    


const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(res)
console.log(dom.window.document.title)
}).catch(err => {
    console.log('执行失败', err);
})