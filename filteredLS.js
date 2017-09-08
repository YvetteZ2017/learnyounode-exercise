var fs = require('fs');
var ls = fs.readdir(process.argv[2],'utf8',function(err, list){
    if (err) throw(err);
    var arr=list.filter(function(x){
        if(x.slice(-(process.argv[3].length+1))=='.'+process.argv[3]){
            return x;
        }
    });
    arr.forEach(function(x){
        console.log(x);
    });
})