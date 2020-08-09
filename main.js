const express = require('express');
const app = express();
const path = require('path');
const {checkFile,fileOptionChecker} = require('./src/utils/utl');



app.get('/',(req,res)=>{
	res.send('for sharing use url/get-file/filename');
	res.end();
});


app.get('/get-file/:fileName',(req,res)=>{
    if(req) {
        const params = req.params;
        if(params.fileName!=undefined) {
            let fileName = params.fileName;
            console.log(fileName);
            checkFile(fileName,(status)=>{
                console.log(status);
                if(!status) {
                    console.log('we got errors');

                   
                     res.send('something is wrong with your file')
                    res.end();
                    return;

                }

                res.download(`${fileOptionChecker().root}/${fileName}`,(err)=>{
                    if(err) { 
                    	console.log(err);
                        res.send("we got error during sending the file");
                        res.end();
                        return
                    }
                    console.log(`${fileName} sent the destination`)
                });


            });

        }
    }
});



app.listen(8080);

