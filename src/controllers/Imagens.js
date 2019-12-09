const Logo = require("../models/LogoSchema");
const fs = require("fs");
const path = require('path');

module.exports={
    async getImage(req,res){
        try{

            const readstream = fs.createReadStream(path.resolve(process.cwd(),"uploads",req.params.filename));
            readstream.pipe(res);
        }catch(e){
            console.log(e)
        }
    }

}

