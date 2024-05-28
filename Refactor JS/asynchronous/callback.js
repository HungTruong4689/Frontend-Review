function addOne(addend,callback){
    callback(addend + 1);
}

function three(callback){
    setTimeout(function(){
        
        callback(3);
    },500);
}



addOne(three())