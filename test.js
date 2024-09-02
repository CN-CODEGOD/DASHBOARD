 const { spawn } = require('node:child_process');
const bat = spawn('powershell.exe', ['&','"C:\\Users\\Administrator\\search\\search.ps1"']);

bat.stdout.on('data',(data)=>{
    var search_log =data.toString();

    var blessed = require('blessed')
    , contrib = require('N:\邓深\blessed-contrib')


    var screen = blessed.screen()
    var log = contrib.log(
        { fg: "green"
        , selectedFg: "green"
        , label: 'Server Log'})
     log.log(search_log)
})

bat.stderr.on('data', (data) => {
  console.error(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
}); 