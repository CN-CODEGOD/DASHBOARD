
const { exec} = require('node:child_process') 
const os = require("os");
const iconv = require('iconv-lite');

const encoding = os.platform() == 'win32' ? 'cp936' : 'utf-8';
const binaryEncoding = 'binary';



exec('"powershell" write 中文测试 ',{ encoding: binaryEncoding }, (err, stdout, stderr) => {
  return new Promise((resolve, reject) => {
  if (err) {
    reject(iconv.decode(new Buffer.from(err.message, binaryEncoding), encoding));
} else {
    resolve(iconv.decode(new Buffer.from(stdout, binaryEncoding), encoding));
    
}
  
})
});