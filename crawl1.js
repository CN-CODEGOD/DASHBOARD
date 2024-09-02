fetch('https://t66y.com/index.php')
        .then(response => response.text())
        .then(htmlContent => {


            const jsdom = require("jsdom");

            const dom = new jsdom.JSDOM(htmlContent);
            console.log(htmlContent)
            console.log(dom.window.document.title);


        })
        .catch(function(err) {

        });